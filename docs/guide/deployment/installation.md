---
name: Server installation
route: /docs/deployment/installation/
menu: Deployment
meta:
  - name: description
    content: "Botfront: server installation"
  - name: keywords
    content: botfront stories nlu rasa slots deployment
permalink: /deployment/:slug
---

# Server installation

Botfront comes as a collection of services delivered as Docker images that you need to orchestrate so they can work together. You have different options.

## Orchestration framework (recommended)

Deploying on Kubernetes or Openshift is by far the best option if you are familiar with one of them, especially if you are running it in production.

## Single server

An alternative option is to deploy all the services on a single machine. You can get a virtual machine from the Cloud Provider of your choice. We recommend a machine with at least 1 CPU and 2 Gb of RAM

::: warning
This is for experimentation only. The following installation is not secure and not suitable for production.
:::

1. Create a virtual machine with Ubuntu installed, and note the external IP address. For this tutorial, we'll assume the IP address is `123.99.135.3`
2. Install Node.js

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
nvm install lts/erbium
```

3. Install Docker and Docker Compose

```bash
sudo apt-get -y update
sudo apt-get -y remove docker docker-engine docker.io
sudo apt -y install docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo apt install curl
sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

4. Install Botfront

```bash
npm install -g botfront
botfront init # create a project
```

5. Edit the `botfront.yml` file

```bash
nano .botfront/botfront.yml
```

In the `env` section, change the `root_url` to the machine IP address (leave the port 8888 unchanged)

```yaml
env:
  ...
  root_url: 'http://123.99.135.3:8888'
  ...
```

6. Launch Botfront

```bash
botfront up
```

7. Open Botfront in your browser (`http://123.99.135.3:8888`) and setup your project
8. Go to settings/credentials and change the `base_url` host to the IP address (keep the host unchanged)

```yaml
rasa_addons.core.channels.webchat.WebchatInput:
  session_persistence: true
  base_url: http://123.99.135.3:5005
  socket_path: "/socket.io/"
```

9. Botfront is ready to use.

## Services and Docker images

The table below lists all the services that can be used with Botfront.

| Service      | Docker image                                                |
| ------------ | ----------------------------------------------------------- |
| botftont     | `botfront/botfront`                                         |
| botfront-api | `botfront/botfront-api`                                     |
| rasa         | `botfront/rasa-for-botfront`                                |
| duckling     | `botfront/duckling`                                         |
| actions      | Build your own                                              |
| mongo        | `mongo` or hosted service (mLab, Mongo Atlas, Compose, ...) |

::: tip Image tags
It is not recommended to deploy the images witout tags or with the `latest` tag. Look in the `.botfront.yml` for the tags corresponding to the version of Botfront you are using.
:::

Duckling (a structured entity parser developed by Facebook) is not strictly required if your NLU pipeline doesn't use it.

Also, be very careful with your choice regarding MongoDB. If you decide to just run it as a container, be sure to at least properly mount the volume on a physical disk (otherwise all your data will be gone when the container is destroyed) and seriously consider scheduling back-ups on a regular basis.

Using a hosted service such as MongoDB Atlas is highly recommended, some of them even include a free plan that will be more than enough for small projects.

## Environment variables

The following table shows the environment variables required by each service. Be sure to make those available as arguments or in the manifest files of your deployment

| Environment variable | Description                                                                                                                                                                                              | Required by               |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `ROOT_URL`           | The Botfront app URL (e.g. https://botfront.your.domain)                                                                                                                                                 | `botfront`                |
| `MONGO_URL`          | The mongoDB connection string (e.g. `mongodb://user:pass@server:port/database`)                                                                                                                          | `botfront` `botfront-api` |
| `MONGO_OPLOG_URL`    | The mongoDB Oplog connection string                                                                                                                                                                      | `botfront` (optional)     |
| `MAIL_URL`           | An SMTP url if you want to use the password reset feature                                                                                                                                                | `botfront`                |
| `BF_PROJECT_ID`      | The Botfront project ID (typically `bf`)                                                                                                                                                                 | `rasa`                    |
| `BF_URL`             | The `botfront-api` root url                                                                                                                                                                              | `rasa` `actions`          |
| `API_KEY`            | GraphQL API key. You can then set the `authorization` header to the `API_KEY` value to perform GraphQL operations                                                                                        | `botfront`                |
| `MODELS_LOCAL_PATH`  | Where the trained model returned by Rasa is stored locally. Defaults to `/app/models/` and should not be changed in a containerized environment. The Botfront Dockerfile exposes a volume with that path | `botfront` (optional)     |

## Volumes

Although volumes are technically not required for Botfront to run and work, if you do not mount them your data will be gone when containers are destroyed.

| Volume        | Description                                                                    | Used by    |
| ------------- | ------------------------------------------------------------------------------ | ---------- |
| `/app/models` | Where Botfront stores the model retured by Rasa when the training is completed | `botfront` |
| `/app/models` | Where Rasa loads a model from when it starts                                   | `rasa`     |
| `/data/db`    | Where MongoDB persists your data                                               | `mongo`    |

`/app/models` should be mounted on the same location so when Rasa restarts it can load the latest trained model.

## MongoDB database considerations

It is **highly** recommended (but optional) to provide an oplog url with `MONGO_OPLOG_URL`. This will improve the reactivity of the platform as well as reduce the network throughput between MongoDB and Botfront.

::: warning IMPORTANT: choose a very short database name
Choose a very short database name (e.g `bf`) and not too long response names to [avoid hitting the limits](https://docs.mongodb.com/manual/reference/limits/#namespaces).
:::

## Indicative technical requirements

Those are the minimal requirements:

| Service                      |    RAM | CPU |
| ---------------------------- | -----: | --: |
| botfront                     |   1 Gb |   1 |
| botfront-api                 | 128 Mb | 0.5 |
| duckling                     | 512 Mb | 0.5 |
| rasa (supervised_embeddings) |   1 Gb |   1 |

## Endpoints

Endpoints let you define how your Rasa instance communicates with`:

- the Botfront API to query the bot responses (`nlg`)
- the actions server (`action_endpoint`)
- the tracker store (`tracker_store`)

```yaml
nlg:
  url: "https://<botfront-api-host>/project/bf/nlg"
action_endpoint:
  url: "https://<actions-server-host>/webhook"
tracker_store:
  store_type: rasa_addons.core.tracker_stores.AnalyticsTrackerStore
  url: "https://<botfront-api-host>"
  project_id: "bf"
```

## Tracker store configuration

Botfront comes with a custom tracker store called `AnalyticsTrackerStore`, which serves as a regular tracker store and provides a Chatbase integration. All you need to do is provide your chatbase API key.

::: warning
The following section is particularly important if you use the `EmbeddingsPolicy`.
:::

One issue we have observed with native TrackerStore implementations is a degradation in performance when the conversations gets very long. Long conversations can't be avoided on channels such as Messenger where the conversation with a user never resets. As a result, an ever longer payload gets carried around between the Rasa, the actions server and the database.

In most situations, only the few latest turns of the conversation are needed to accurately predict the next action, so this implementation provides a mechanism to keep a limited amount of events in memory, while of course persisting everything in the database.

`max_events` lets you decide how many events you want to keep in memory for prediction. It defaults to `100`, you might want to increase that value with the `EmbeddingsPolicy`. Set it to `0` if you want to keep it all in memory.

Another issue is that memory requirements grow with the number of conversations even when many sessions are inactive. To prevent that, a sweeper runs every 30 seconds to clear inactive sessions from memory. All the sessions with the latest event occuring more than `tracker_persist_time` seconds earlier will be swept. `tracker_persist_time` defaults to `3600`, so every conversation inactive for more than an hour will be removed from memory. If the user comes back after an hour, the latest `max_events` will be fetched from the database so this mechanism is completely transparent to the user.

### Chatbase integration

If you want to use Chatbase with your assistant, all you have to do is set the `chatbase_api_key`.

```yaml
tracker_store:
  store_type: botfront.tracker_stores.analytics.AnalyticsTrackerStore
  url: http://botfront-api:8080
  project_id: < Botfront project ID >
  chatbase_api_key: < Chatbase API key >
  chatbase_version: < Chatbase version >
  max_events: < Maximum number of events kept in memory >
  tracker_persist_time: < Delay of inactivity before the conversation gets removed from memory >
```

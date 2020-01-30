import React from "react"

export default ({ addClassNames }) => (
  <div className={`botfront-logo ${addClassNames || '' }`}>
    Botfront.
  </div>
)
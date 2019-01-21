import React from 'react'

export default ({ member }) => (
  <div key={member.id} className="col-md-3">
    <img src={member.image.file.url} className="img-responsive" />
    <p>{member.name}</p>
    <small>{member.shortBio.shortBio}</small>
  </div>
)

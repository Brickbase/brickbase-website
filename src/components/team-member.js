import React from 'react'

export default ({ member }) => (
  <div key={member.id} className="col-md-3 team-member">
    <img src={member.image.file.url} className="img-responsive team-image" />
    <p>{member.name}</p>
    <small>{member.shortBio.shortBio}</small>
  </div>
)

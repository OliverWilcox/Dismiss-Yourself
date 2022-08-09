export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  value: 'slug',
  fields: [
    {
			name: "releaseImage",
			title: "Release Image",
			type: "image"
		},
    {
      name: 'releaseNum',
      title: 'Release Number',
      type: 'string',
    },
    {
      name: 'artistName',
      title: 'Artist Name',
      type: 'string',
    },
    {
      name: 'releaseName',
      title: 'Release Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    
    },
    {
      name: 'releaseDate',
      title: 'Release Date',
      type: 'string',
    },
    {
      name: 'releaseType',
      title: 'Release Type',
      type: 'string',
    },
    {
      name: 'anr',
      title: 'A&R',
      type: 'string',
    },
    {
      name: 'genre',
      title: 'Genre',
      type: 'string',
    },
    {
      name: 'mastering',
      title: 'Mastering',
      type: 'string',
    },
    {
      name: 'mixing',
      title: 'Mixing',
      type: 'string',
    },
    {
      name: 'engineering',
      title: 'Engineering',
      type: 'string',
    },
    {
      name: 'spotifyLink',
      title: 'Spotify Link',
      type: 'string',
    },
    {
      name: 'appleLink',
      title: 'Apple Music Link',
      type: 'string',
    },
    {
      name: 'soundLink',
      title: 'Soundcloud Link',
      type: 'string',
    },
    
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    
  ],
  

 
      
  orderings: [
    {
      title: 'Release Num New',
      name: 'releaseDateDesc',
      by: [
        {field: 'releaseNum', direction: 'desc'}
      ]
    },
    
    {
      title: 'Release Num, Old',
      name: 'releaseDateAsc',
      by: [
        {field: 'releaseNum', direction: 'asc'}
      ]
    },
    {
      title: 'Popularity',
      name: 'popularityDesc',
      by: [
        {field: 'popularity', direction: 'desc'}
      ],
     
    }
  ]
    
   
  


}

module.exports = {
    images: {
      domains: ['localhost'],
    },
    async redirects() {
        return [
          {
            source: '/admin',
            destination: 'https://api.kevinmerinsky.com/admin',
            permanent: true,
          },
        ]
      },
  }
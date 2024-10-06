const serve = (app) =>
{
    const port = process.env.APP_PORT || 80

    const server = app.listen(port, () =>
    {
        console.log('\n[JobPortalApp] Successfully started the API!')
        console.log(`[JobPortalApp] Your API is running on port http://localhost:${port}`)
        console.log(`[JobPortalApp] Using environment: ${process.env.NODE_ENV}\n`)
    })

    process.on('SIGTERM', () =>
    {
        console.log('SIGTERM signal received.')
        console.log('Closing HTTP server.')

        server.close(() =>
        {
            console.log('HTTP server closed.')
            process.exit(0)
        })
    })
}

module.exports = serve
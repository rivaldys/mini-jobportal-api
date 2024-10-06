const positions = require('../../../../database/data/db_FOR-DEMO-ONLY.json') // NOTES: for demo only

const detail = async (req, res, next) =>
{
    try
    {
        const jobId = req.params.id

        const jobDetail = positions.find(job => job.id === jobId)

        if(!jobDetail)
        {
            return res.status(404).json({
                statusCode: 404,
                statusText: 'Not Found',
                message: `Job with ID ${jobId} not found.`,
                errors: true,
            })
        }

        return res.status(200).json({
            statusCode: 200,
            statusText: 'OK',
            message: 'Successfully retrieved job detail',
            data: jobDetail
        })
    }
    catch(error)
    {
        console.error(error)

        if(error.response && error.response.status === 404)
        {
            return res.status(404)
                .json({
                    statusCode: 404,
                    statusText: 'Not Found',
                    message: `Job with ID ${req.params.id} not found.`,
                    errors: true
                })
        }

        return res.status(500)
            .json({
                statusCode: 500,
                statusText: 'Internal Server Error',
                message: 'An error occurred while fetching job details.',
                errors: true
            })
    }
}

module.exports = detail
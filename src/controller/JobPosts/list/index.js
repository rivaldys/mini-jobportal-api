const positions = require('../../../../database/data/db_FOR-DEMO-ONLY.json') // NOTES: for demo only

const list = async (req, res, next) =>
{
    try
    {
        let { description, search, location, full_time, page } = req.query
        description = description || search
        const currentPage = parseInt(page) || 1

        let jobList = positions

        if (description) {
            jobList = jobList.filter(job => 
                job.description.toLowerCase().includes(description.toLowerCase()) || 
                job.title.toLowerCase().includes(description.toLowerCase())
            )
        }
        
        if (location) {
            jobList = jobList.filter(job => 
                job.location.toLowerCase().includes(location.toLowerCase())
            )
        }

        if (full_time) {
            const isFullTime = full_time === 'true'
            jobList = jobList.filter(job => job.type === (isFullTime ? 'Full Time' : 'Part Time'));
        }

        const pageSize = 10
        const startIndex = (currentPage - 1) * pageSize;
        const paginatedJobs = jobList.slice(startIndex, startIndex + pageSize);

        return res.status(200).json({
            statusCode: 200,
            statusText: 'OK',
            message: 'Successfully retrieved job post list',
            data: {
                jobs: paginatedJobs,
                totalJobs: jobList.length,
                currentPage: currentPage,
                totalPages: Math.ceil(jobList.length / pageSize)
            }
        })
    }
    catch(error)
    {
        console.error(error)

        return res.status(500)
            .json({
                statusCode: 500,
                statusText: 'Internal Server Error',
                message: 'An error occurred while fetching job list.',
                errors: true
            })
    }
}

module.exports = list
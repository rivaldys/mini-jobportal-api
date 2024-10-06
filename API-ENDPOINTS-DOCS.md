# Mini Job Portal - API Documentation

## &#10095; Endpoint List:
- [User Login](#user-login)
- [Job Posts](#job-posts-list)
- [Job Post Detail](#job-post-detail)

## <p id="user-login"></p>&#10102; User Login

### • Endpoint
`POST http://localhost:3002/auth/login`

### • Description
Authenticates a user and returns a Bearer token if the credentials are valid.

### • Request Body

| Key        | Type   | Required | Description           |
|------------|--------|----------|-----------------------|
| `username` | string | Yes      | The user's username.  |
| `password` | string | Yes      | The user's password.  |

### • Example Request
```json
{
    "username": "user",
    "password": "12345678"
}
```

### • Response

#### `200 OK`
A successful response returns a Bearer token and a success message.

```json
{
    "statusCode": 200,
    "statusText": "OK",
    "message": "Log in successful.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ...",
    "loggedInUser": {
        "fullname": "User",
        "photo": null
    }
}
```

## <p id="job-posts-list"></p>&#10103; Get Job Posts

### • Endpoint
`GET http://localhost:3002/job-posts/list`

### • Description
Retrieves a list of job posts based on the provided query parameters. The list can be filtered by job description, location, and job type (full-time or not). Results are paginated.

### • Headers

| Key             | Value             | Required | Description                             |
|-----------------|-------------------|----------|-----------------------------------------|
| `Authorization` | `Bearer {token}`   | Yes      | Bearer token for authorization.         |

### • Query Parameters

| Parameter    | Type    | Required | Description                                                |
|--------------|---------|----------|------------------------------------------------------------|
| `search`     | string  | No       | Search keyword to filter job posts by title or company name.|
| `description`| string  | No       | Filter job posts by job description.                       |
| `location`   | string  | No       | Filter job posts by location.                              |
| `full_time`  | boolean | No       | Filter job posts by full-time positions. `true` or `false`. |
| `page`       | number  | No       | Page number for paginated results. Defaults to 1.           |

### • Example Request
```json
GET http://localhost:3002/job-posts/list
```
OR (with query parameters):
```json
GET http://localhost:3002/job-posts/list?description=java&location=Cologne&full_time=true&page=2
```

### • Responses

#### `200 OK`
A successful response returns a JSON object containing the job posts that match the query parameters.

```json
{
    "statusCode": 200,
    "statusText": "OK",
    "message": "Successfully retrieved job post list",
    "data": {
        "jobs": [
            {
                "id": "32bf67e5-4971-47ce-985c-44b6b3860cdb",
                "type": "Full Time",
                "url": "https://jobs.github.com/positions/32bf67e5-4971-47ce-985c-44b6b3860cdb",
                "created_at": "Wed May 19 00:49:17 UTC 2021",
                "company": "SweetRush",
                "company_url": "https://www.sweetrush.com/",
                "location": "Remote",
                "title": "Senior Creative Front End Web Developer",
                "description": "<p><strong>SweetRush has an exciting opportunity for an experienced creative front-end developer (full stack is also acceptable) with an eye for graphic and UX design!</strong></p>\n<p><strong>ABOUT THE ROLE:</strong></p>...\n",
                "how_to_apply": "<p>If this describes your interests and experience, please submit your current resume and salary requirements through the following link:\n<a href=\"https://www.sweetrush.com/join-us/\">https://www.sweetrush.com/join-us/</a></p>\n",
                "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaUtqIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--82886ff47e94ff4c0255b95773a9667644768b2b/SR%20Logo.png"
            },
            {
                "id": "7638eee4-4e75-4c06-a920-ea7619a311b5",
                "type": "Full Time",
                "url": "https://jobs.github.com/positions/7638eee4-4e75-4c06-a920-ea7619a311b5",
                "created_at": "Tue May 18 17:12:52 UTC 2021",
                "company": "MANDARIN MEDIEN Gesellschaft für digitale Lösungen mbH",
                "company_url": "https://www.mandarin-medien.de/",
                "location": "Schwerin",
                "title": "Systemadministrator:in",
                "description": "<p>2002 sind wir als Internetagentur gestartet. Heute bezeichnen wir uns als Digitalagentur. Das Spielfeld ist heute breiter und greift tiefer in bestehende Geschäftsbereiche ein. In unseren 3 Units MARKETING, DIGITAL &amp; TALENT arbeiten über 80 Macher, Nerds und Kreative nach einem Prinzip: Messbar mehr Erfolg. Das heißt konkret: Klare Ziele. Permanente Optimierung. Transparentes Reporting.</p>\n<p><strong>Wer wir sind</strong></p>...\n",
                "how_to_apply": "<p><a href=\"https://t.gohiring.com/h/83f7df34249addb0bebc8dc680310d1ded43220a748ee285e27989a457dd10ea\">Application form</a></p>\n",
                "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaCtqIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8d0339b9e43b0dca160b9db73b230b6067e39b05/MANDARIN%20MEDIEN%20Gesellschaft%20fu%CC%88r%20digitale%20Lo%CC%88sungen%20mbH.jpeg"
            },
            ...
        ],
        "totalJobs": 18,
        "currentPage": 1,
        "totalPages": 2
    }
}
```

#### `401 Unauthorized`
If the token is missing or invalid, a 401 Unauthorized response is returned.

```json
{
    "statusCode": 401,
    "statusText": "Unauthorized",
    "message": "Authorization token is required."
}
```

#### `500 Internal Server Error`
In case of a server error, a 500 Internal Server Error will be returned.

```json
{
    "statusCode": 500,
    "statusText": "Internal Server Error",
    "message": "An error occurred while fetching job list.",
    "errors": true
}
```

## <p id="job-post-detail"></p>&#10104; Get Job Post Detail

### • Endpoint
`GET http://localhost:3002/job-posts/detail/:id`

### • Description
Retrieves detailed information for a specific job post based on the provided job post ID.

### • Headers

| Key             | Value             | Required | Description                             |
|-----------------|-------------------|----------|-----------------------------------------|
| `Authorization` | `Bearer {token}`   | Yes      | Bearer token for authorization.         |

### • URL Parameters

| Parameter | Type   | Required | Description                       |
|-----------|--------|----------|-----------------------------------|
| `id`      | string | Yes      | Unique identifier (UUID) of the job post. |

### • Example Request
```json
GET http://localhost:3002/job-posts/detail/32bf67e5-4971-47ce-985c-44b6b3860cdb
```

### • Responses

#### `200 OK`
A successful response returns the details of the specified job post.

```json
{
    "statusCode": 200,
    "statusText": "OK",
    "message": "Successfully retrieved job detail",
    "data": {
        "id": "32bf67e5-4971-47ce-985c-44b6b3860cdb",
        "type": "Full Time",
        "url": "https://jobs.github.com/positions/32bf67e5-4971-47ce-985c-44b6b3860cdb",
        "created_at": "Wed May 19 00:49:17 UTC 2021",
        "company": "SweetRush",
        "company_url": "https://www.sweetrush.com/",
        "location": "Remote",
        "title": "Senior Creative Front End Web Developer",
        "description": "<p><strong>SweetRush has an exciting opportunity for an experienced creative front-end developer (full stack is also acceptable) with an eye for graphic and UX design!</strong></p>\n<p><strong>ABOUT THE ROLE:</strong></p>\n...",
        "how_to_apply": "<p>If this describes your interests and experience, please submit your current resume and salary requirements through the following link:\n<a href=\"https://www.sweetrush.com/join-us/\">https://www.sweetrush.com/join-us/</a></p>\n",
        "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaUtqIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--82886ff47e94ff4c0255b95773a9667644768b2b/SR%20Logo.png"
    }
}
```

#### `401 Unauthorized`
If the token is missing or invalid, a 401 Unauthorized response is returned.

```json
{
    "statusCode": 401,
    "statusText": "Unauthorized",
    "message": "Authorization token is required."
}
```

#### `404 Not Found`
If the token is missing or invalid, a 401 Unauthorized response is returned.

```json
{
    "statusCode": 404,
    "statusText": "Not Found",
    "message": "Job with ID 32bf67e5-4971-47ce-985c-44b6b3860cdb1 not found.",
    "errors": true
}
```

#### `500 Internal Server Error`
In case of a server error, a 500 Internal Server Error will be returned.

```json
{
    "statusCode": 500,
    "statusText": "Internal Server Error",
    "message": "An error occurred while fetching job details.",
    "errors": true
}
```

## &#10095; Author
This documentation was written by [Ahmad Rivaldy S](https://rivaldy.net)
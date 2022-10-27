import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-lg text-gray-900 dark:text-white'>Q: What is cors? </h2>
            <p className='text-gray-500 dark:text-gray-300 mb-8'>Answer:- Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. </p>
            <h2 className='text-lg text-gray-900 dark:text-white'>Q: Why are you using firebase? What other options do you have to implement authentication? </h2>
            <p className='text-gray-500 dark:text-gray-300 mb-8'>Answer:- The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. <br/>
                Top Firebase Realtime Database Alternatives:
                <ul>
                    <li>MongoDB</li>
                    <li>Oracle Database </li>
                    <li>Amazon Redshift</li>
                    <li>DataStax Enterprise</li>
                    <li>Redis Enterprise Cloud</li>
                    <li>Cloudera Enterprise Data Hub</li>
                    <li>Db2</li>
                    <li>Couchbase Server</li>
                </ul>
            </p>
            <h2 className='text-lg text-gray-900 dark:text-white'>Q: How does the private route work? </h2>
            <p className='text-gray-500 dark:text-gray-300 mb-8'>Answer:- The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in). </p>
            <h2 className='text-lg text-gray-900 dark:text-white'>Q: What is Node? How does Node work? </h2>
            <p className='text-gray-500 dark:text-gray-300 mb-8'>Answer:- Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications. <br/>
            Working procedure of node: It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. </p>
        </div>
    );
};

export default Blog;
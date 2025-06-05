AWS Beacon - AI-Powered AWS Certification Study Assistant
AWS Beacon is a Retrieval-Augmented Generation (RAG) powered study assistant that helps AWS professionals prepare for certifications by leveraging official AWS documentation and generating personalized practice questions. The solution uses Amazon Bedrock's Knowledge Bases to implement a fully managed RAG workflow, ensuring responses are accurate and up-to-date with the latest AWS documentation.

Solution Overview
AWS Beacon leverages Amazon Bedrock along with several AWS services to provide an interactive study experience:

Amazon Bedrock for LLM capabilities and RAG implementation
Amazon OpenSearch Serverless for vector storage
Amazon S3 for certification material storage
AWS Lambda for serverless compute
Amazon API Gateway for REST endpoints
Amazon Cognito for user authentication (stretch goal)
Amazon DynamoDB for progress tracking (stretch goal)
Solution Architecture Diagrams
Study Assistant Chatbot
![Architecture Diagram Placeholder]

Content Management Pipeline
![Pipeline Diagram Placeholder]

Features
Interactive chatbot interface for AWS certification questions
Dynamic quiz generation based on official AWS documentation
Personalized study recommendations
Progress tracking and analytics
Support for multiple AWS certifications:
AWS Cloud Practitioner
Solutions Architect Associate
Additional certifications (planned)
Deploy Solution
Prerequisites
Install and configure [AWS CLI](https://aws.amazon.com/cli/)
Install and bootstrap [AWS CDK](https://aws.amazon.com/cdk/)
Select a region from Amazon Bedrock [Supported Regions](https://docs.aws.amazon.com/bedrock/latest/userguide/bedrock-regions.html)
Node.js v14 or later
Backend Deployment
Clone this repository
Navigate to the backend folder
Install dependencies:
    
npm install

    

    
Deploy using CDK:
    
cdk deploy --context allowedip="YOUR_IP_CIDR"

    

    
Note the following outputs:

API Gateway URL
S3 bucket name for study materials
Configure Amazon Bedrock
The solution uses two foundation models:

Anthropic Claude Instant (default) for question answering
Amazon Titan Embeddings G1 - Text for knowledge base embeddings
Ensure you have [model access enabled](https://docs.aws.amazon.com/bedrock/latest/userguide/model-access.html) in your AWS account.

Upload Study Materials
Access the S3 bucket created during deployment
Upload AWS certification study materials (PDFs, docs)
Content will automatically sync with the knowledge base
Frontend Deployment
Navigate to the frontend folder
Install dependencies:
    
npm install

    

    
Start the application:
    
npm run start

    

    
Configure the application:
Enter the API Gateway endpoint
Select preferred foundation model
Begin studying!
Security Features
WAF protection for API Gateway
S3 bucket encryption and access controls
Private VPC configuration
SSL/TLS encryption in transit
IAM role-based access control
Cognito user authentication (stretch goal)
Cleanup
To avoid incurring charges, run:

    
cdk destroy

    

    
Contributing
Interested in contributing? Please read our contributing guidelines and submit a pull request!

License
This project is licensed under the Apache-2.0 License.

Documentation
For detailed documentation about:

[Amazon Bedrock](https://aws.amazon.com/bedrock/)
[Knowledge Bases for Amazon Bedrock](https://aws.amazon.com/bedrock/knowledge-bases/)
[Amazon OpenSearch Serverless](https://aws.amazon.com/opensearch-service/serverless/)
Support
For support, please open an issue in the GitHub repository or contact the AWS Professional Services team.

# AWS Beacon - AI-Powered AWS Certification Study Assistant

AWS Beacon is a Retrieval-Augmented Generation (RAG) powered study assistant that helps AWS professionals prepare for certifications by leveraging official AWS documentation and generating personalized practice questions. The solution uses Amazon Bedrock's Knowledge Bases to implement a fully managed RAG workflow, ensuring responses are accurate and up-to-date with the latest AWS documentation.

## Solution Overview

AWS Beacon leverages Amazon Bedrock along with several AWS services to provide an interactive study experience:

- Amazon Bedrock for LLM capabilities and RAG implementation
- Amazon OpenSearch Serverless for vector storage
- Amazon S3 for certification material storage
- AWS Lambda for serverless compute
- Amazon API Gateway for REST endpoints
- Amazon Cognito for user authentication (stretch goal)
- Amazon DynamoDB for progress tracking (stretch goal)

## Solution Architecture Diagrams

Study Assistant Chatbot
![Architecture Diagram Placeholder]

Content Management Pipeline
![Pipeline Diagram Placeholder]

## Features

- Interactive chatbot interface for AWS certification questions
- Dynamic quiz generation based on official AWS documentation
- Personalized study recommendations
- Progress tracking and analytics
- Support for multiple AWS certifications:
  - AWS Cloud Practitioner
  - Solutions Architect Associate
  - Additional certifications (planned)

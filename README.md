
# Zero Test 

Generate column mapping suggestions and Python Script between two CSVs using OpenAI's LLM.  



## Features

- Generate Column Mapping Suggestions and Python Script using OpenAI's LLM
- Can Edit Suggestion and Code Script
- Can Run the Script and See Results



## API Reference

#### Post the files to get LLM generated mapping suggestion and code
#### Post User edited suggestion along with files to get LLM generated mapping suggestion and code according to user Suggestions

```http
  POST /suggest_column_mapping/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `input_table` | `File` | **Required**. table_A.csv / table_B.csv |
| `template_table` | `File` | **Required**. template.csv |
| `suggestion` | `string` | **Optional**. user edited suggestion |


#### Post the Code and relative file for mapping the colums 

```http
  POST /column_mapper/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `code`      | `string` | **Required**. code to map colums |
| `input_table`      | `File` | **Required**. table_A.csv / table_B.csv |


## Environment Variables

To run this project, you will need to add the following environment variable to your .env file

`OPENAI_API_KEY`



## Run Locally
Clone the project

```bash
  git clone https://github.com/usmanasif/Zero_Test_Assignment.git
```
Go to the project directory

```bash
  cd Zero_Test_Assignment
```
#### Backend Setup

Go to the backend directory

```bash
  cd backend
```

Install dependencies

```bash
  pip install -r requirements.txt
```

Start the server

```bash
  uvicorn main:app --host 0.0.0.0 --port 8000
```

#### Frontend Setup

Go to frontend directory

```bash
  cd front_end
```
Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```
## App flow

- Choose input file and Template file
- Click on "UPLOAD FILES" button and it will fetch "Suggestions" and "Python Script" data
- You can update suggestions and python script
- You can MAP the code and see the results
- Click on "DOWNLOAD RESULTS" to download csv file of the output data.
## Screenshots

![App Screenshot](https://github.com/usmanasif/Zero_Test_Assignment/blob/7ff457921ba293f46b10b03a5491236baca06083/screen%20shoots/s1.png)

![App Screenshot](https://github.com/usmanasif/Zero_Test_Assignment/blob/7ff457921ba293f46b10b03a5491236baca06083/screen%20shoots/S2.png)


## Future Work (Approach For Training LLM Using Synthetic Data)

In anticipation of harnessing the full potential of the LLM for the business-spacific tasks in the future, I have adopted an approach by storing synthetic data produced by the LLM in conjunction with the prompts or queries issued to it. This is being systematically stored in integrated database. 

No doubt, LLMs are great at handling a wide range of topics,but LLMs might not always be perfect for business specific tasks. There is a need of Surpvised Training of LLM for business specific tasks.

To do this without increasing costs or needing more people, I have come up with a smart method. I am carefully saving the prompt and its answers by LLM. Think of it like collecting a dataset of specific business-related tasks. With this approach, every prompt and response is like a training lesson, for LLM and the best part is, I am generating and saving synthetic data without extra work and involvement of Human resources i.e Data Annotators.

The big picture is simple: When I have enough of these saved conversations, I can use them to better train the LLM. I want it to really understand the specific business needs. By training the LLM with this data, the LLM will not just have general knowledge but will be better at helping in unique business situation.

In conclusion, by combining the LLM's broad knowledge with my collected data, I am aiming to create a tool that is not only advanced but also perfectly suited to specific business needs and how I operate.

If I had more time, I would have added a Feedback loop in my app.  


# Zero Test 

Generate column mapping suggestions and Python Script between two CSVs using OpenAI's LLM.



## Features

- Generate Column Mapping Suggestion and Python Script using OpenAI's LLM
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
  cd zero_app
```

Install dependencies

```bash
  pip install -r requirements.txt
```

Start the server

```bash
  uvicorn main:app --host 0.0.0.0 --port 8000
```


# Approach For Training LLM on Synthetic Data

Keeping in mind to Train LLM in Future

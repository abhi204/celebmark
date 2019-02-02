FROM python:3.7

# Set environment varibles
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1


#RUN pip install --upgrade pip
RUN pip install pipenv
RUN mkdir -p /code
RUN mkdir -p /logs
WORKDIR /code


# install our dependencies
# we use --system flag because we don't need an extra virtualenv
COPY ./Pipfile ./Pipfile.lock /code/
RUN pipenv install --system

COPY . /code/

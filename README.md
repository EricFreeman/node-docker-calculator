# node-docker-calculator

Sample project to demonstrate a NodeJS/Express calculator API running in a docker container deployed through AWS Elastic Beanstalk's CLI.

The API has multiple endpoints:

| Name                  | Example                                                                    |
| --------------------- |:--------------------------------------------------------------------------:|
| Add                   | http://node-docker-calculator.us-west-2.elasticbeanstalk.com/add/10/5      |
| Subtract              | http://node-docker-calculator.us-west-2.elasticbeanstalk.com/subtract/10/5 |
| Multiply              | http://node-docker-calculator.us-west-2.elasticbeanstalk.com/multiply/10/5 |
| Divide                | http://node-docker-calculator.us-west-2.elasticbeanstalk.com/divide/10/5   |

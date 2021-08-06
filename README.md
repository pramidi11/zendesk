## ZENDESK CLI
This repo is to support zendesk cli which is used to pull tickets or user details based on ID


## Installation
```npm install``` in root of directory

## Test and coverae
```npm run coverage``` in root of directory

## Usage

Assumption:- Use Mac

1. Open terminal
2. CD into root of directory ```zendesk```
3. Run ```chmod +x bin/zendesk```
4. Run ```bin/zendesk``` to get started
5. Run ```bin/zendesk -u 1```

```shell
bin/zendesk -h
Welcome to the zendesk!
zendesk [command] <options>

    user .............. show users with Id
    ticket ............ show ticket with  Id
    help ............... show help menu for a command,

    --user, -u ..... _id of the user
    --ticket, -t ..... _id of the ticket 
```


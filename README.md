# Cancer Baba Front end (Navya Patient Services)

## One time setup
npm install -g npm@5.0.3
npm install

## Build
`git submodule update --init --recursive`
`npm run build`

## Deploy
```bucket=<bucket-name> npm run deploy```

e.g.
* preprod: ```env=preproduction bucket=cancerbaba-preprod npm run deploy```
* prod: ```env=production bucket=cancerbaba-prod npm run deploy```

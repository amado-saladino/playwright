# Playwright

## Run tests

```shell
npx playwright test --headed
```

`--headed` could be removed for headless mode

## Run a single test file

```shell
npx playwright test tests/todo-page.spec.js
```

## Run a set of test files

```shell
npx playwright test tests/todo-page/ tests/landing-page/
```

## code generator

```shell
npx playwright codegen google.de
```

## Viewing the trace

```
npx playwright show-trace trace.zip
```

## Container

```shell
docker run -it -v $PWD:/app --ipc=host --user pwuser \
 --security-opt seccomp=seccomp_profile.json \
 mcr.microsoft.com/playwright:v1.17.1-focal /bin/bash
```
### seccomp

```
https://github.com/microsoft/playwright/blob/master/utils/docker/seccomp_profile.json
```

## Custom image

```shell
docker build -t test:v1 .
docker run -d -v $PWD:/app -v test-report:/report -v /app/node_modules --ipc=host --user pwuser --security-opt seccomp=seccomp_profile.json test:v1
```

### root user

A workaround to copy the test report upon test run is to run the container with `root` user

```shell
docker run -d -v $PWD:/app -v test-report:/report -v /app/node_modules --ipc=host --security-opt seccomp=seccomp_profile.json test:v1
```

### Report container

```shell
docker run -d -v test-report:/usr/share/nginx/html -p 81:80 nginx:1.14
```

### Gallery

```shell
docker run -d -p 82:80 -v $PWD/screenshots:/Pictures:ro ghcr.io/linuxserver/photoshow
```

## docker compose

```shell
docker-compose up -d
```

### Regression test

```shell
docker-compose start test
```

### Test report

```
http://localhost:81
```

### Gallery

```
http://localhost:82
```

## References

- [Applitools Test Automation University](https://testautomationu.applitools.com/js-playwright-tutorial/)
- [PLaywright with Jest](https://github.com/ortoniKC/Playwright-TypeScript-Jest)
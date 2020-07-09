## Projeto base para api com Deno

The CMD line in the Dockerfile determines parameters passed to Deno.

```
CMD ["run", "--allow-net","--allow-read", "src/index.ts"]
```

Note: That the listen port (3000), must match with the EXPOSED port in the Dockerfile.

Run using the build and run commands (you may want to use a more descriptive name than `app`):

```sh
$ docker build -t app . && docker run -it --init -p 3000:3000 app
```

In another terminal or browser you can access:

```sh
$ curl localhost:3000/test
```

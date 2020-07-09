FROM hayd/alpine-deno:1.1.3

EXPOSE 3000

WORKDIR /app

USER deno

ENV PORT=3000
ENV ADDRESS=localhost

# COPY deps.ts .
# RUN deno cache deps.ts

ADD . .
RUN deno cache src/index.ts

CMD ["run", "--allow-net", "--allow-read", "src/index.ts"]
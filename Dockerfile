FROM hayd/alpine-deno:1.1.3

EXPOSE 1993

WORKDIR /app

USER deno

ENV PORT=1993
ENV ADDRESS=localhost

# COPY deps.ts .
# RUN deno cache deps.ts

ADD . .
RUN deno cache src/index.ts

CMD ["run", "--allow-net", "--allow-read", "src/index.ts"]
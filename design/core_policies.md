# Node.js core Security Policies

The goal of that document is to design a behavior in Node.js core that could be used to disable certain features of
Node.js.

A simple way to reach that goal is to prevent the loading of certain core modules according to the defined policy.

A policy is enforced by setting up a runtime flag for the Node.js process to disable a set of features:

```sh
$ node --disable-addons index.js
```

Also, a per core module blacklist can be set up:

```
$ node --disable=net,http,https,http2,dns,udp index.js
```

Question:
* Do we want to allow policy definition from a file
* How can we make sure modules like linters, that people start from `.bin` never have access to network


## Pre-built-policies

| flag | impact |
|------|--------|
|--disable-addons|prevent the use of C/C++ addons (including N-API)|
|--disable-network|prevent the use of net, dns, http, http2, udp|


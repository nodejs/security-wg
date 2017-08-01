# Schema for vulnerabilities

| Key | Type | Description | Example |
|-----|------|-------------|---------|
|`id`|Integer > 0|Unique number identifying the record|349|
|`created_at`|date-time|Record creation|"2017-05-19T22:45:59.16+00:00"|
XXX do we need this, or is it just a mongo internal field?

|`updated_at`|date-time|Record update|"2017-06-05T13:01:57.071+00:00"|
XXX do we need this, or is it just a mongo internal field?

|`title`|String|Short readable description|"Directory Traversal"|
|`author`|String|Finder of vuln|"Liang Gong"|
XXX what if reporter was not finder?

|`module_name`|String|npm package name|"badjs-sourcemap-server"|
|`publish_date`|date-time|when made public|"2017-06-05T13:01:57.07+00:00"|
|`cves`|Array[String]|Associated CVE IDs|[]|
XXX only 22 and 7 have multiple CVEs, might be simpler to enforce a CVE-per-record rule
XXX for both, all the CVEs are reserved but still empty, whats up?
XXX see http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-3743 for example

|`vulnerable_versions`|semver-spec|vulnerable versions?|"<99.999.9999"|
XXX What is exact syntax of semver-spec? Is it https://www.npmjs.com/package/semver#ranges ?

|`patched_versions`|semver-spec|versions after fixed?|"<0.0.0"|
XXX so vulnerable versions are `vulnerable_versions` MINUS `patched_versions`? And any other versions are assumed not vulnerable?

|`slug`|String with no whitespace|unique descriptive string|"badjs-sourcemap-server_directory-traversal"|
XXX charset is what? Probably URL safe chars? `ALPHA  DIGIT  "-" / "." / "_" / "~"`

|`overview`|Multiline String|Long form description|"`badjs-sourcemap-server` recieves files sent by `badjs-sourcemap`.\n\n`badjs-sourcemap-server` is vulnerable to a directory traversal issue, giving an attacker access to the filesystem by placing \"../\" in the url.\n\nExample request:\n```\nGET /../../../../../../etc/passwd HTTP/1.1\nhost:localhost\n```\nand response:\n```\nHTTP/1.1 200 OK\nDate: Wed, 17 May 2017 22:59:49 GMT\nConnection: keep-alive\nTransfer-Encoding: chunked\n\n{content of /etc/passwd}\n```"|
|`recommendation`|Multiline String|Recommendation for mitigation|"Because there is no fix for this module, we recommend using a different one."|
|`references`|String, multiline markdown bullet list|URLs of interest?|"* [PoC by Liang Gong](https://github.com/JacksonGL/NPM-Vuln-PoC/tree/master/directory-traversal/badjs-sourcemap-server)"|
XXX what is structure? do they have to be markdown URLs?

|`cvss_vector`|CVSS vector|CVSS vector|"CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N"|
|`cvss_score`|CVSS score|Calculated from vector|7.5|
XXX cvss v2? https://nvd.nist.gov/vuln-metrics/cvss/vector-v2 or https://www.first.org/cvss/v2/guide ?

|`coordinating_vendor`| "^Lift Security"
XXX Company who reported? But different from the author? Is coordination a thing, if so, what is coordinated?

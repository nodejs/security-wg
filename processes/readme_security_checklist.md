# README / documentation security checklist

Defensive guidance for npm package maintainers: treat **README and docs code examples as security-critical surface**, not just "getting started" copy.

Related discussion: [nodejs/security-wg#1560](https://github.com/nodejs/security-wg/issues/1560).

## Why this exists

Library implementations are often secure by default, while README snippets teach weaker patterns that developers copy into production. Across high-download packages this has included:

- Unanchored `RegExp` origin / audience checks (CORS, JWT)
- `Math.random()` for filenames or tokens where `crypto.randomBytes` is the library default
- Examples that re-inject credentials after redirect stripping

This checklist is **white-hat / defensive only**. It does not describe how to attack systems; it helps maintainers avoid documenting insecure footguns.

## Maintainer checklist

### Before merging docs PRs

- [ ] Diff README/examples with the same scrutiny as `src/` security changes.
- [ ] Prefer the library's **secure default** in examples (or label clearly as non-production).
- [ ] If a simplified example omits a security property, annotate it:

  ```markdown
  > Warning: this example uses Math.random() for brevity.
  > In production, use crypto.randomBytes() (see library default).
  ```

- [ ] For `RegExp` allowlists (origins, audiences, hosts), show **anchored** patterns (`^` / `$` / scheme boundary) and explain why.
- [ ] Avoid documenting patterns that bypass intentional security behavior (e.g. re-adding secrets after HTTPS→HTTP credential strip on redirect).
- [ ] Keep translated READMEs in sync when security-relevant examples change.

### Suggested README section (optional)

```markdown
## Security notes for examples

Examples in this README are meant to be safe to copy for production use.
If an example intentionally omits a control for clarity, it is marked with a Warning callout.
```

### Automation ideas (optional)

- Run secret / insecure-randomity linters on fenced code blocks in Markdown.
- Add a CI job that fails if README examples regress known-bad patterns (unanchored origin regex, `Math.random()` near `filename` / `token`, etc.).

## References

- [CWE-330: Use of Insufficiently Random Values](https://cwe.mitre.org/data/definitions/330.html)
- [CWE-185: Incorrect Regular Expression](https://cwe.mitre.org/data/definitions/185.html)
- OWASP Cheat Sheet Series — Input Validation / JWT / CORS-related sheets
- Issue write-up and ecosystem examples: [nodejs/security-wg#1560](https://github.com/nodejs/security-wg/issues/1560)

---

Authored for the Node.js Security WG ecosystem discussion.  
— Felipe Fernandes (@felipeofdev-ai) · Crystal Engineer / Agentic AI

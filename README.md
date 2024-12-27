[![Deploy to GitHub Pages](https://github.com/heidelbergman-de/heidelbergman-de.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/heidelbergman-de/heidelbergman-de.github.io/actions/workflows/deploy.yml)

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


## DNS Settings

The github pages default site is `heidelbergman-de.github.io`. Actually the site is accessible via custom domain `heidelberg-triathlon.de`. The DNS service is configured in the following way: 

### APEX Domain: heidelberg-triathlon.de

#### A Record

```
dig heidelberg-triathlon.de +nostats +nocomments +nocmd -t A

; <<>> DiG 9.10.6 <<>> heidelberg-triathlon.de +nostats +nocomments +nocmd -t A
;; global options: +cmd
;heidelberg-triathlon.de.		IN	A
heidelberg-triathlon.de.	824	IN	A	185.199.108.153
```

#### AAAA Record

```
dig heidelberg-triathlon.de +nostats +nocomments +nocmd -t AAAA

; <<>> DiG 9.10.6 <<>> heidelberg-triathlon.de +nostats +nocomments +nocmd -t AAAA
;; global options: +cmd
;heidelberg-triathlon.de.		IN	AAAA
heidelberg-triathlon.de.	3600	IN	AAAA	2606:50c0:8000::153```
```

### Sub Domain: www.heidelberg-triathlon.de

#### CNAME Record

```
dig www.heidelberg-triathlon.de +nostats +nocomments +nocmd

; <<>> DiG 9.10.6 <<>> www.heidelberg-triathlon.de +nostats +nocomments +nocmd
;; global options: +cmd
;www.heidelberg-triathlon.de.		IN	A
www.heidelberg-triathlon.de.	3335	IN	CNAME	heidelbergman-de.github.io.
heidelbergman-de.github.io. 3335 IN	A	185.199.108.153
heidelbergman-de.github.io. 3335 IN	A	185.199.111.153
heidelbergman-de.github.io. 3335 IN	A	185.199.109.153
heidelbergman-de.github.io. 3335 IN	A	185.199.110.153
```

### Domain Verification

#### Organization TXT Record

```
dig _github-challenge-heidelbergman-de-org.heidelberg-triathlon.de +nostats +nocomments +nocmd TXT
; <<>> DiG 9.10.6 <<>> _github-challenge-heidelbergman-de-org.heidelberg-triathlon.de +nostats +nocomments +nocmd TXT
;; global options: +cmd
;_github-challenge-heidelbergman-de-org.heidelberg-triathlon.de. IN TXT
_github-challenge-heidelbergman-de-org.heidelberg-triathlon.de. 3591 IN TXT "86673483c0"
```

#### Pages TXT Record

```
dig _github-pages-challenge-heidelbergman-de.heidelberg-triathlon.de +nostats +nocomments +nocmd TXT

; <<>> DiG 9.10.6 <<>> _github-pages-challenge-heidelbergman-de.heidelberg-triathlon.de +nostats +nocomments +nocmd TXT
;; global options: +cmd
;_github-pages-challenge-heidelbergman-de.heidelberg-triathlon.de. IN TXT
_github-pages-challenge-heidelbergman-de.heidelberg-triathlon.de. 3600	IN TXT "7d4e6a2896f9cd3203329e96984729"
```

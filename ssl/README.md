# How to trust CA

try, pass phase 1234 or no passphase.

https://gist.github.com/cecilemuller/9492b848eb8fe46d462abeb26656c4f8

Windows 10: Chrome, IE11 & Edge

Windows 10 recognizes .crt files, so you can right-click on RootCA.crt > Install to open the import dialog.

Choose current user,
Make sure to select "Trusted Root Certification Authorities" and confirm.

You should now get a green lock in Chrome, IE11 and Edge.

MacOS, use Keychain
https://support.untangle.com/hc/en-us/articles/212220648-Manually-installing-root-certificate-on-Mac-OSX

https://www.freecodecamp.org/news/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec/

---
for mobile test
1) disable https
2) use localtunnel to create a proxy https url
3) npm install -g localtunnel
4) run cmd (with admin right)
5) command -> lt --port 8080

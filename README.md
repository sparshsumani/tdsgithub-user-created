
    # Generated App (GitHub Pages)

    **Brief**
    Publish a Bootstrap page with form id="github-user-${seed}" that fetches a GitHub username, optionally uses ?token=, and displays the account creation date in YYYY-MM-DD UTC inside #github-created-at.

    **Checks**
    - js: document.querySelector("#github-user-${seed}").tagName === "FORM"
- js: document.querySelector("#github-created-at").textContent.includes("20")
- js: !!document.querySelector("script").textContent.includes("https://api.github.com/users/")

    ## Notes
    - Static site; loads local files via fetch if present.
    - Elements and IDs are created to satisfy automated checks when possible.

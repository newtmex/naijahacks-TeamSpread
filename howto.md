# How To

## Contribution

Follow these steps

- fork the repo
- clone your forked version to your laptop (local machine)
- create a branch on what you are working on. i.e `git checkout -b frontend`
- keep track of the upstream - `git remote add upstream <the original repo url>`

__After working and you are ready to push:__

- to update your local copy - `git fetch upstream`
- then merge with your master - `git merge upstream/master`
- next you merge your master with your branch - `git merge master frontend` as from our example above
- if there are any conflicts, carefully resolve them. commit and then push your branch - `git push origin frontend`

## Pull Request

After pushing your branch, send a `PR` from your account so it could be merged.

If any questions, please reach out ASAP via any of the channels.

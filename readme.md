## Saxophone

This app responds to a discourse topic create / update webhook and creates / updates
a jekyll page accordingly.

> **Disclaimer**: This is an ass-backwards way of doing it. There's no reason to involve
> webhooks or third-party services, but I don't know Ruby, and this seems easier. I fully
> admit this was an excuse to use Google Functions, so there we go.


### How it Works

1. Discourse fires off the webhook. Endpoint decides if it should pursue or drop
1. Endpoint pursues. Get (raw? cooked?) content from discourse
	* Create filename from date + discourse-generated slug
1. Interrogate github repo. If a file exists update or delete it, else create a new one.
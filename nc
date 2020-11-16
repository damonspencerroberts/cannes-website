Hi I am hosting my site using the Heroku server and trying to connect my Namecheap URL palaisbellevue.com to the Heroku site and it works, but I want to redirect all my traffic to HTTPS://www.palaisbellevue.com. When I type HTTPS://www.palaisbellevue.com in the search bar it works however when I type in palaisbellevue.com or www.palaisbellevue.com it comes up as HTTP and is not secure with SSL.
Heroku has come with an SSL so HTTPS does work but is not being redirected...
Heroku gave me 2 codes for the custom domain name:
palaisbellevue.com -> ancient-marlin-vkp5t14nuc512dx5vmfn5nsv.herokudns.com
www.palaisbellevue.com -> guarded-caribou-23nduwux5e6ffr3rlcawbuii.herokudns.com
I have 3 host DNS set up:
ALIAS @ ancient-marlin-vkp5t14nuc512dx5vmfn5nsv.herokudns.com.
CNAME WWW guarded-caribou-23nduwux5e6ffr3rlcawbuii.herokudns.com.
URL Redirect WWW HTTPS://www.palaisbellevue.com

Again the site works on the custom domain but I want the site to be secure and redirected on all possibilities to https://www.
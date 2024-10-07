![Chrome Watching a Burning Cookie](https://i.ibb.co/nmr9zmf/Designer.jpg)

#### Google is making significant changes to third-party cookies: If you use such cookies in your services, it’s worth a minute of your time to read.

* It's highly recommended checking out the links at the end of the article for more valuable information on the topic.

Recently, while developing a personal project, I encountered an issue in the production environment that didn't arise in the development environment: the authentication flow I defined, which relies on cookies, didn’t work. Usually, in such cases, one would expect to see errors in various tools in the browser, but strangely, there were no errors in any logs or tools.

I remembered that during development, I had seen a warning message in the browser console regarding upcoming changes related to third-party cookies in browsers, so I did some research.

It turns out that Google has been making efforts in recent years to establish some globally browsing-privacy standards aimed at protecting users security and privacy, primarily from third-party services that track and monitor user activity. Also known as "Privacy Sandbox."

##### What does this mean, and how does they suggest on coping with the expected changes?
Third-party cookies are used by various services to collect information about users, which infringes on their privacy. When Google decides to restrict these third-party cookies, those services will either be blocked or will at least need to make necessary changes to continue functioning. Even user-friendly and critical features that rely on third-party cookies will be affected.

Here are some terms you should know: CHIPS, Related Website Set, Storage Access API.

##### So, what is CHIPS?
CHIPS stands for Cookies Having Independent Partitioned State.
These are independent, partitioned cookies that will exist in the context of a third-party service, usually a service embedded in websites, and essentially function similarly to other cookies in holding values.
The innovation here is that Google is introducing a new feature for cookies called "Partitioned." As it sounds, these are cookies that are theoretically in a partition, isolated and accessible only to the specific site where the service is embedded, with their values being unique to that embedding site.

The current behavior of third-party cookies allows services to use the value of a cookie across websites that embed the same service. This is essentially the Privacy Sandbox’s answer to prevent privacy violations and isolate the cookie to a third-party cookie jar per site. Consequently, cookies from service ABC embedded in websites X and Y will hold completely independent values from each other.

Since there are more than a few specific uses for third-party cookies, there is an option to define the relationships between your services to ensure critical cookies are not blocked:
Related Website Set - a way to define relationships among several dependent services to allow a limited number of third-party cookies for specific purposes.
In brief, to define the relationships between your services, you will need to submit a Pull Request to the relevant Google repository.

Additionally, the resources linked below contain a lot of important information for both developers and those for whom the topic is relevant; I highly recommend reading them.

So how did I solve my challenge in the project?
Well, that’s already material for another post, and I’ve run out of characters for this one, so I guess there’s no choice but to wait for the next post :)

Related links:
[https://lnkd.in/dJkrxxTw](https://lnkd.in/dJkrxxTw)  
[https://goo.gle/chips](https://goo.gle/chips)  
[https://goo.gle/rws](https://goo.gle/rws)  
[https://goo.gle/saa](https://goo.gle/saa)
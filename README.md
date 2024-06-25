Start Project
run: 
1. npm install
2. npm run dev
3. enter into localhost:3000


After all the meeting, I implement react query
1. First I need to implements the QueryClientProvider to create an instance of the query to use it on all the request. The documentation is on https://tanstack.com/query/latest/docs/framework/react/reference/QueryClientProvider#queryclientprovider
2. When the QueryClientProvider is on the main, you can use the useQuery hook
Note. 

NOTE
Since on the requirements there is the infinite scroll pagination I need to use the infinite queries from the next docs https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries

3. On the documentation of the randomuser.me says than can use a pagination on this documentation https://randomuser.me/documentation to use the pagination you need add the params page and results. Since the catfact.ninja api sends pages of 10 results I'll use the results param with a value equals to 10 and the param page on any number on the randomuser api to match all the data 

NOTE
Also add the "nat" param on the random user to use only names used on united states

NOTE 
To extract the interfaces from the APIs I used the converter of  https://app.quicktype.io/?l=ts to extract the Interface
# Synopsys

Quick demo of GraphQL basic functionality 'running' against some simple JSON files. Everything here is optimised for the customer, this is not often the case in the codebase.

This demo contains some simple and more advanced concepts and design principals for layouts of data.

# Design

## Analogy
The best example of the way I see GraphQL being best utilised:

If we think of the data structure of the application as a statue, GraphQL as a way of representing the full statue and allowing us to view it from all the possible orientations we may need to fully appreciate it.

## Concepts

Some initial thinking about the way we layout our GraphQL structure can allow us to really leverage the way that it is used to benefit us and the end user.

In the concepts below we are going to use the same simple data structure for all of them:

```
Customer: {
    id,
    name,
}
Account: {
    id,
    customerId,
    balance
}
Card: {
    id,
    accountId
    customerId,
}
```

### Structure

You can organise data in a few ways. Generally for a component based architecture it is easier for most data to be kept fairly flat and normalised way:

```
type Customer: {
    id: string,
    name: string,
}
type Account: {
    id: string,
    customerId: string,
    balance: string
}
type Card: {
    id: string,
    accountId: string
    customerId: string,
}
```

Exposing the full data structure in GraphQL gives a much larger set of metadata about how the data organised so that the requester can query what is important.

```
type Customer: {
    id: string,
    name: string,
}
type Account: {
    id: string,
    customer: Customer,
    balance: string
}
type Card: {
    id: string, 
    account: Account
    customer: Customer
}
```

This metadata of association is where the power of GraphQL can be fully utilised and realised. Requests asking for the data in the way it is needed allows GraphQL to stitch together all the data in the most simple way.

Most parts of a UI wont need to know all of the cards and accounts associated with a customer. But if some does need to know all or some of that data that can now be requested when it is needed.

### Access

Once we have represented the data: GraphQL 'rewards' thinking about how we will access it and allowing the structure to be viewed in those ways. The reason for this is that optimising the data for the accessing of it allows us to double down on the power that GraphQL gives us.

```
type Customer: {
    id: string,
    name: string,
}
type Account: {
    id: string,
    customer: Customer,
    balance: string
}
type Card: {
    id: string, 
    account: Account
    customer: Customer
}
type Query {
    getCustomer(id: string): Customer
    getAccount(id: string): Account
    getCard(id: string): Card
}
```

In this example GraphQL is letting the user query potentially all of the data by the basic object ID values. Most front end queries will be based on a few simple values that tie the data together in a common way: The `customerId` in the above example or a `location` and `date` for a flight search.


# Notes

While I think GraphQL rewards the organising of the data in the full structure I believe that for most component led architectures the data should then be flattened in preparation for the front end to display it.

This can lead to a GraphQL design that doesn't directly fit the front-ends needs. Personally I don't think this is an issue as I think GraphQL's job is to act as an abstraction layer for the data. Gathering all the relevant data we need, then mapping that data into a more appropriate format for displaying seems like a logical way of making the UI both as flexible and powerful as possible.

I find that picking one of the 2 techniques for both API's and UI tends to lead to compromises that cause a lot of implementation issues.
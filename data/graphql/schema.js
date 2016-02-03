import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString
} from 'graphql';

let schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Query',
		fields: () => ({
			counter: {
				type: GraphQLInt,
				resolve: () => 42
			},
			message: {
				type: GraphQLString,
				resolve: () => "Hello GraphQL"
			}
		})
	}),
	mutation: new GraphQLObjectType({
		name: 'Mutation',
		fields: () => ({
			incrementCounter: {
				type: GraphQLInt,
				resolve: () => ++counter
			}
		})
	})
});

export default schema;
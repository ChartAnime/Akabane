import { ApolloServer } from 'apollo-server';
import * as TypeORM from 'typeorm';

export default class Akabane {

    public server!: ApolloServer;
    public db!: TypeORM.Connection;

}

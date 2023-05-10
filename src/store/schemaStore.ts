import {
  GraphQLField,
  GraphQLFieldMap,
  GraphQLInputFieldMap,
  GraphQLScalarType,
  GraphQLSchema,
} from 'graphql';

import { action, makeObservable, observable } from 'mobx';
import { getGraphQLSchema } from '../api/api';

interface OpenState {
  query: boolean;
  queryFields: boolean;
  queryField: boolean;
  scalarType: boolean;
}

class SchemaStore {
  schema: GraphQLSchema | null = null;

  defaultOpened: OpenState = {
    query: false,
    queryFields: false,
    queryField: false,
    scalarType: false,
  };

  queryFields: GraphQLFieldMap<unknown, unknown> | GraphQLInputFieldMap | null = null;

  queryField: GraphQLField<unknown, unknown> | null = null;

  scalarType: GraphQLScalarType<unknown, unknown> | null = null;

  headerText = 'Docs';

  opened: OpenState = { ...this.defaultOpened, query: true };

  constructor() {
    makeObservable(this, {
      schema: observable,
      defaultOpened: observable,
      queryFields: observable,
      queryField: observable,
      scalarType: observable,

      headerText: observable,

      opened: observable,

      loadSchema: action,

      setQueryFields: action,
      setSelectedQueryField: action,
      setSelectedScalarType: action,

      setHeaderText: action,
    });
  }

  async loadSchema() {
    const schema = await getGraphQLSchema();
    this.schema = schema || null;
  }

  setQueryFields(fields: GraphQLFieldMap<unknown, unknown> | GraphQLInputFieldMap | null) {
    this.queryFields = fields;
  }

  setSelectedQueryField(field: GraphQLField<unknown, unknown> | null) {
    this.queryField = field;
  }

  setSelectedScalarType(type: GraphQLScalarType<unknown, unknown> | null) {
    this.scalarType = type;
  }

  setOpenState(key: string) {
    this.opened = { ...this.defaultOpened, [key]: true };
  }

  setHeaderText(text: string) {
    this.headerText = text;
  }
}

export default SchemaStore;

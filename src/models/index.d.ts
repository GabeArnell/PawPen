import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerDogs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dogs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Phone?: string | null;
  readonly Email?: string | null;
  readonly City?: string | null;
  readonly Description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDogs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dogs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Phone?: string | null;
  readonly Email?: string | null;
  readonly City?: string | null;
  readonly Description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Dogs = LazyLoading extends LazyLoadingDisabled ? EagerDogs : LazyDogs

export declare const Dogs: (new (init: ModelInit<Dogs>) => Dogs) & {
  copyOf(source: Dogs, mutator: (draft: MutableModel<Dogs>) => MutableModel<Dogs> | void): Dogs;
}
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Profile: undefined;
      Activities: undefined;
      Details: { 
        id: string;
        title: string;
        description?: string;
        creationDate?: string;
      };
    }
  }
}
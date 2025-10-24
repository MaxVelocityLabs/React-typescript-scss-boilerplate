export abstract class BaseService {
  protected static instances: Map<string, BaseService> = new Map();
  protected serviceName: string;

  protected constructor(serviceName: string) {
    this.serviceName = serviceName;
  }

  static getInstance<T extends BaseService>(
    this: new (serviceName: string) => T,
    serviceName: string
  ): T {
    if (!BaseService.instances.has(serviceName)) {
      BaseService.instances.set(serviceName, new this(serviceName));
    }
    return BaseService.instances.get(serviceName) as T;
  }

  protected getServiceName(): string {
    return this.serviceName;
  }
}

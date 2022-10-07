import { backendUrl } from './config';
import { InstanceServiceClient } from '@/grpc/NewvcmsServiceClientPb';
import {
  InstanceFindRequest,
  InstanceFindResponse,
  InstanceFindByIdRequest,
  InstanceFindByIdResponse,
  InstanceCreateRequest,
  InstanceUpdateRequest,
  Sorter,
} from '@/grpc/newvcms_pb';

const { OrderEnum } = Sorter;

const client = new InstanceServiceClient(backendUrl);

const update = async (identifier: string, instance: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    let request = new InstanceUpdateRequest();
    console.log(instance);
    //
    //设置下时间
    request.setIdentifier(identifier);

    for (let k in instance) {
      let v = instance[k];
      if (typeof v === 'string') {
        request.getValuesMap().set(k, v);
      } else {
        request.getValuesMap().set(k, JSON.stringify(v));
      }
    }
    console.log(request.getValuesMap());
    client.updateInstance(request, {}, (err, response) => {
      if (err) {
        resolve({
          code: 1,
          message: '',
        });
      } else {
        try {
          resolve({
            code: response.getCode(),
            message: response.getMessage(),
          });
        } catch (e) {}
      }
    });
  });
};

const create = async (identifier: string, instance: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    let request = new InstanceCreateRequest();
    console.log(instance);
    //
    //设置下时间
    request.setIdentifier(identifier);
    for (let k in instance) {
      let v = instance[k];
      if (typeof v === 'string') {
        request.getDataMap().set(k, v);
      } else {
        request.getDataMap().set(k, JSON.stringify(v));
      }
    }
    console.log(request.getDataMap());
    client.createInstance(request, {}, (err, response) => {
      if (err) {
        resolve({
          code: 1,
          message: '',
        });
      } else {
        try {
          resolve({
            code: response.getCode(),
            message: response.getMessage(),
          });
        } catch (e) {}
      }
    });
  });
};

const findOne = async (identifier: string, uid: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    let request = new InstanceFindByIdRequest();
    //
    //设置下时间
    request.setUid(uid);
    request.setIdentifiersList([identifier]);

    client.findInstanceById(request, {}, (err, response) => {
      if (err) {
        resolve({
          code: 1,
          message: '',
        });
      } else {
        try {
          let res = JSON.parse(response.getData());
          console.log(res);
          if (res && res.data && res.data[0]) {
            resolve(res.data[0]);
          }
        } catch (e) {}
      }
    });
  });
};

const find = async (
  identifier: string,
  filters: Array<any>,
  sorters: Array<any>,
  condition: any,
  pageSize: number,
  page: number,
): Promise<any> => {
  return new Promise((resolve, reject) => {
    let request = new InstanceFindRequest();
    //
    //设置下时间
    if (sorters) {
      request.setSortersList(
        sorters.map((sorter) => {
          let s = new Sorter();
          s.setPropertyidentifier(sorter.field);
          s.setOrder(OrderEnum.ORDERASC);
          return s;
        }),
      );
    }
    if (condition) {
      for (let key in condition) {
        let value = condition[key];
        console.log(key, value);
        request.getConditionMap().set(key, value);
      }
    }

    request.setPage(page);
    request.setPageSize(pageSize);
    request.setIdentifier(identifier);

    client.findInstance(request, {}, (err, response) => {
      if (err) {
        resolve({
          code: 1,
          message: '',
        });
      } else {
        let res = JSON.parse(response.getData());
        resolve({
          // totalElements: res?.extend1[0]?.cnt,
          content: res?.instances,
        });
      }
    });
  });
};

export { find, findOne, create, update };

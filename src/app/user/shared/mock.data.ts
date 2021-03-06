import Mock from 'mockjs';
import {environment} from '../../../environments/environment';

/**
 * 使用Mock.js模拟后台接口数据，在environment里通过设置mockData来启用/停用模拟数据。
 */
if (environment.mockData) {
    Mock.mock('/user-manage/allUsers', function () {
        return Mock.mock(
            {
                'success': true,
                'errorMsg': '成功',
                'errorCode': '0000',
                'data|1-10': [{
                    'id|+1': 1,
                    description: '@cname',
                    locked: false,
                    manageDomainId: '1234',
                    manageDomainName: '@cname',
                    roleType: 'admin',
                    staffName: 'admin',
                    staffNum: 'admin',
                    userName: 'admin'
                }]
            }
        );
    });
    Mock.mock('/user-manage/allUsers1', function () {
        return Mock.mock(
            {
                'success': true,
                'errorMsg': '成功',
                'errorCode': '0000',
                'data|1-10': [{
                    'id|+1': 10,
                    description: '@cname',
                    locked: false,
                    manageDomainId: '1234',
                    manageDomainName: '@cname',
                    roleType: 'admin',
                    staffName: 'admin',
                    staffNum: 'admin',
                    userName: 'admin'
                }]
            }
        );
    });
    Mock.mock('/user-manage/allDomains', function () {
        return Mock.mock(
            {
                'success': true,
                'errorMsg': '成功',
                'errorCode': '0000',
                'data|1-10': [{
                    'id|+1': 10,
                    name: '@city'
                }]
            }
        );
    });
    Mock.mock('/user-manage/domain', function () {
        return Mock.mock(
            {
                'success': true,
                'errorMsg': '成功',
                'errorCode': '0000',
                'data': {
                    id: '@integer',
                    name: '@city'
                }
            }
        );
    });
}


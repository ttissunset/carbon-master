import request from '@/api/axios'

export const reqDeleteRole = (companyId,roleId)=>request({url:`http://gmall-h5-api.atguigu.cn/admin/product/baseTrademark/remove/${companyId}`,data:roleId,method:'delete'})
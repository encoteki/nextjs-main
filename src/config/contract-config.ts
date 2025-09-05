import { HexString } from '@/types/hexString'
import { tsbd } from './abis/tsbd'
import { daoImpl } from './abis/daoImpl'
import { bpImpl } from './abis/bpImpl'
import { factory } from './abis/factory'

const tsbdAddress: HexString =
  (process.env.NEXT_PUBLIC_TSBD_CA as HexString) ?? '0x00'
const daoImplAddress: HexString =
  (process.env.NEXT_PUBLIC_DAO_IMPL_CA as HexString) ?? '0x00'
const bpImplAddress: HexString =
  (process.env.NEXT_PUBLIC_BP_IMPL_CA as HexString) ?? '0x00'
const factoryAddress: HexString =
  (process.env.NEXT_PUBLIC_FACTORY_CA as HexString) ?? '0x00'

const contractConfig = {
  tsbd,
  tsbdAddress,
  daoImpl,
  daoImplAddress,
  bpImpl,
  bpImplAddress,
  factory,
  factoryAddress,
} as const

export default contractConfig

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MetaRouter, MetaRouterInterface } from "../MetaRouter";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "TransitTokenSent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_receiveSide",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_offset",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "externalCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "stableBridgingFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "crossChainID",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "externalID",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "tokenReal",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "chainID",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "swapTokens",
            type: "address[]",
          },
          {
            internalType: "address",
            name: "secondDexRouter",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "secondSwapCalldata",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "finalReceiveSide",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "finalCalldata",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "finalOffset",
            type: "uint256",
          },
        ],
        internalType: "struct MetaRouteStructs.MetaMintTransaction",
        name: "_metaMintTransaction",
        type: "tuple",
      },
    ],
    name: "metaMintSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "firstSwapCalldata",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "secondSwapCalldata",
            type: "bytes",
          },
          {
            internalType: "address[]",
            name: "approvedTokens",
            type: "address[]",
          },
          {
            internalType: "address",
            name: "firstDexRouter",
            type: "address",
          },
          {
            internalType: "address",
            name: "secondDexRouter",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "nativeIn",
            type: "bool",
          },
          {
            internalType: "address",
            name: "relayRecipient",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "otherSideCalldata",
            type: "bytes",
          },
        ],
        internalType: "struct MetaRouteStructs.MetaRouteTransaction",
        name: "_metarouteTransaction",
        type: "tuple",
      },
    ],
    name: "metaRoute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "metaRouterGateway",
    outputs: [
      {
        internalType: "contract MetaRouterGateway",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_swapCalldata",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_burnToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_synthesis",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_burnCalldata",
        type: "bytes",
      },
    ],
    name: "returnSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b503060405161001e90610060565b6001600160a01b039091168152602001604051809103906000f08015801561004a573d6000803e3d6000fd5b5060601b6001600160601b03191660805261006d565b6104d780611db283390190565b60805160601c611cfe6100b46000396000818160c60152818161066c015281816108180152818161097801528181610cad01528181610ff401526112500152611cfe6000f3fe60806040526004361061005a5760003560e01c8063a11b119811610043578063a11b1198146100a1578063c394a5da146100b4578063f5b697a51461010457600080fd5b80633bc788351461005f578063732cffe914610081575b600080fd5b34801561006b57600080fd5b5061007f61007a366004611a40565b610124565b005b34801561008d57600080fd5b5061007f61009c366004611809565b61053a565b61007f6100af366004611a7c565b6107e7565b3480156100c057600080fd5b506100e87f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b34801561011057600080fd5b5061007f61011f3660046118ca565b61119c565b600061013360e0830183611b30565b600081811061014457610144611c16565b905060200201602081019061015991906117ee565b9050610169610120830183611b7a565b1590506102ad5760008061020b61018360e0860186611b30565b600081811061019457610194611c16565b90506020020160208101906101a991906117ee565b60208601356101c0610120880161010089016117ee565b6101ce610120890189611b7a565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506024925061124a915050565b915091508161027557610253816040518060400160405280602081526020017f4d657461526f757465723a20696e7465726e616c2073776170206661696c65648152506113b0565b60405162461bcd60e51b815260040161026c9190611afd565b60405180910390fd5b61028260e0850185611b30565b600181811061029357610293611c16565b90506020020160208101906102a891906117ee565b925050505b6102bb610160830183611b7a565b15905061040357604082013560006102d7610160850185611b7a565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250608485018790526040516370a0823160e01b8152306004820152949550936001600160a01b03881693506370a082319250602401905060206040518083038186803b15801561035557600080fd5b505afa158015610369573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038d9190611ab8565b90506000806103b586846103a96101608b016101408c016117ee565b878b610180013561124a565b91509150816103fd57610253816040518060400160405280601d81526020017f4d657461526f757465723a2066696e616c2063616c6c206661696c65640000008152506113b0565b50505050505b600061041260e0840184611b30565b600161042160e0870187611b30565b61042c929150611bc1565b81811061043b5761043b611c16565b905060200201602081019061045091906117ee565b6040516370a0823160e01b81523060048201526001600160a01b0391909116906370a082319060240160206040518083038186803b15801561049157600080fd5b505afa1580156104a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c99190611ab8565b90508015610535576105356104e160e0850185611b30565b60016104f060e0880188611b30565b6104fb929150611bc1565b81811061050a5761050a611c16565b905060200201602081019061051f91906117ee565b61052f60e0860160c087016117ee565b836113e6565b505050565b6000806105828b8b8b8b8b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506024925061124a915050565b91509150816105ad5761025381604051806060016040528060228152602001611c85602291396113b0565b6040516370a0823160e01b81523060048201526000906001600160a01b038816906370a082319060240160206040518083038186803b1580156105ef57600080fd5b505afa158015610603573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106279190611ab8565b9050600085858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050506064810183905290507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0390811690881614156106e75760405162461bcd60e51b815260206004820152601f60248201527f4d657461526f7574657256323a20696e76616c696420726563697069656e7400604482015260640161026c565b863b878161074b5760405162461bcd60e51b815260206004820152602b60248201527f4d657461526f757465723a2063616c6c20666f722061206e6f6e2d636f6e747260448201526a1858dd081858d8dbdd5b9d60aa1b606482015260840161026c565b5050600080886001600160a01b0316836040516107689190611ae1565b6000604051808303816000865af19150503d80600081146107a5576040519150601f19603f3d011682016040523d82523d6000602084013e6107aa565b606091505b5091509150816107d65761025381604051806060016040528060318152602001611c54603191396113b0565b505050505050505050505050505050565b60006107f66040830183611b30565b915061080a905060e0830160c08401611952565b6108f4576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639fc314c861084a6040850185611b30565b600081811061085b5761085b611c16565b905060200201602081019061087091906117ee565b336040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526001600160a01b0392831660048201529116602482015260a08501356044820152606401600060405180830381600087803b1580156108db57600080fd5b505af11580156108ef573d6000803e3d6000fd5b505050505b60a08201356109038380611b7a565b159050610bed5761091a60e0840160c08501611952565b61096e5761096e61092e6040850185611b30565b600081811061093f5761093f611c16565b905060200201602081019061095491906117ee565b61096460808601606087016117ee565b8560a00135611555565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166109a860808501606086016117ee565b6001600160a01b031614156109ff5760405162461bcd60e51b815260206004820181905260248201527f4d657461526f757465723a20696e76616c696420666972737420726f75746572604482015260640161026c565b600080610a1260808601606087016117ee565b803b9250905081610a795760405162461bcd60e51b815260206004820152602b60248201527f4d657461526f757465723a2063616c6c20666f722061206e6f6e2d636f6e747260448201526a1858dd081858d8dbdd5b9d60aa1b606482015260840161026c565b506000905080610a8f60808601606087016117ee565b6001600160a01b031634610aa38780611b7a565b604051610ab1929190611ad1565b60006040518083038185875af1925050503d8060008114610aee576040519150601f19603f3d011682016040523d82523d6000602084013e610af3565b606091505b509150915081610b3c57610253816040518060400160405280601d81526020017f4d657461526f757465723a2066697273742073776170206661696c65640000008152506113b0565b610b496040860186611b30565b6001818110610b5a57610b5a611c16565b9050602002016020810190610b6f91906117ee565b6040516370a0823160e01b81523060048201526001600160a01b0391909116906370a082319060240160206040518083038186803b158015610bb057600080fd5b505afa158015610bc4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be89190611ab8565b925050505b80610bfb6020850185611b7a565b159050610f47576000610c116020860186611b7a565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250505050602481018490529050610ca3610c5e6040870187611b30565b610c69600288611bc1565b818110610c7857610c78611c16565b9050602002016020810190610c8d91906117ee565b610c9d60a08801608089016117ee565b85611555565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016610cdd60a08701608088016117ee565b6001600160a01b03161415610d5a5760405162461bcd60e51b815260206004820152602160248201527f4d657461526f757465723a20696e76616c6964207365636f6e6420726f75746560448201527f7200000000000000000000000000000000000000000000000000000000000000606482015260840161026c565b600080610d6d60a08801608089016117ee565b803b9250905081610dd45760405162461bcd60e51b815260206004820152602b60248201527f4d657461526f757465723a2063616c6c20666f722061206e6f6e2d636f6e747260448201526a1858dd081858d8dbdd5b9d60aa1b606482015260840161026c565b506000905080610dea60a08801608089016117ee565b6001600160a01b031683604051610e019190611ae1565b6000604051808303816000865af19150503d8060008114610e3e576040519150601f19603f3d011682016040523d82523d6000602084013e610e43565b606091505b509150915081610e8c57610253816040518060400160405280601e81526020017f4d657461526f757465723a207365636f6e642073776170206661696c656400008152506113b0565b610e996040880188611b30565b610ea4600189611bc1565b818110610eb357610eb3611c16565b9050602002016020810190610ec891906117ee565b6040516370a0823160e01b81523060048201526001600160a01b0391909116906370a082319060240160206040518083038186803b158015610f0957600080fd5b505afa158015610f1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f419190611ab8565b93505050505b610f9d610f576040860186611b30565b610f62600187611bc1565b818110610f7157610f71611c16565b9050602002016020810190610f8691906117ee565b610f97610100870160e088016117ee565b83611555565b6000610fad610100860186611b7a565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050506064810183905290506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016611025610100870160e088016117ee565b6001600160a01b0316141561107c5760405162461bcd60e51b815260206004820152601d60248201527f4d657461526f757465723a20696e76616c696420726563697069656e74000000604482015260640161026c565b600080611090610100880160e089016117ee565b803b92509050816110f75760405162461bcd60e51b815260206004820152602b60248201527f4d657461526f757465723a2063616c6c20666f722061206e6f6e2d636f6e747260448201526a1858dd081858d8dbdd5b9d60aa1b606482015260840161026c565b50600090508061110e610100880160e089016117ee565b6001600160a01b0316836040516111259190611ae1565b6000604051808303816000865af19150503d8060008114611162576040519150601f19603f3d011682016040523d82523d6000602084013e611167565b606091505b5091509150816111935761025381604051806060016040528060228152602001611ca7602291396113b0565b50505050505050565b60006111e288888888888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508a925061124a915050565b50905080611240576111f58883896113e6565b604080516001600160a01b038481168252602082018a90528a168183015290517f0ac368c799fd87078497a837c3b184349108599d7c108f68710d3321ba416c6f9181900360600190a15b5050505050505050565b600060607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316856001600160a01b031614156112d05760405162461bcd60e51b815260206004820152601f60248201527f4d657461526f757465723a20696e76616c696420726563656976655369646500604482015260640161026c565b6112db878688611555565b838301869052843b85816113455760405162461bcd60e51b815260206004820152602b60248201527f4d657461526f757465723a2063616c6c20666f722061206e6f6e2d636f6e747260448201526a1858dd081858d8dbdd5b9d60aa1b606482015260840161026c565b5050846001600160a01b03168460405161135f9190611ae1565b6000604051808303816000865af19150503d806000811461139c576040519150601f19603f3d011682016040523d82523d6000602084013e6113a1565b606091505b50909890975095505050505050565b60606044835110156113c35750806113e0565b600483019250828060200190518101906113dd9190611993565b90505b92915050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905291516000928392908716916114709190611ae1565b6000604051808303816000865af19150503d80600081146114ad576040519150601f19603f3d011682016040523d82523d6000602084013e6114b2565b606091505b50915091508180156114dc5750805115806114dc5750808060200190518101906114dc9190611976565b61154e5760405162461bcd60e51b815260206004820152602d60248201527f5472616e7366657248656c7065723a3a736166655472616e736665723a20747260448201527f616e73666572206661696c656400000000000000000000000000000000000000606482015260840161026c565b5050505050565b6040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b03838116602483015282919085169063dd62ed3e9060440160206040518083038186803b1580156115b857600080fd5b505afa1580156115cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115f09190611ab8565b101561053557604080516001600160a01b0380851660248301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff604480840182905284518085039091018152606490930184526020830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790529251610535938793879391926000928392908716916116ab9190611ae1565b6000604051808303816000865af19150503d80600081146116e8576040519150601f19603f3d011682016040523d82523d6000602084013e6116ed565b606091505b50915091508180156117175750805115806117175750808060200190518101906117179190611976565b61154e5760405162461bcd60e51b815260206004820152602b60248201527f5472616e7366657248656c7065723a3a73616665417070726f76653a2061707060448201527f726f7665206661696c6564000000000000000000000000000000000000000000606482015260840161026c565b80356001600160a01b03811681146117a057600080fd5b919050565b60008083601f8401126117b757600080fd5b50813567ffffffffffffffff8111156117cf57600080fd5b6020830191508360208285010111156117e757600080fd5b9250929050565b60006020828403121561180057600080fd5b6113dd82611789565b600080600080600080600080600060e08a8c03121561182757600080fd5b6118308a611789565b985060208a0135975061184560408b01611789565b965060608a013567ffffffffffffffff8082111561186257600080fd5b61186e8d838e016117a5565b909850965086915061188260808d01611789565b955061189060a08d01611789565b945060c08c01359150808211156118a657600080fd5b506118b38c828d016117a5565b915080935050809150509295985092959850929598565b600080600080600080600060c0888a0312156118e557600080fd5b6118ee88611789565b96506020880135955061190360408901611789565b9450606088013567ffffffffffffffff81111561191f57600080fd5b61192b8a828b016117a5565b9095509350506080880135915061194460a08901611789565b905092959891949750929550565b60006020828403121561196457600080fd5b813561196f81611c42565b9392505050565b60006020828403121561198857600080fd5b815161196f81611c42565b6000602082840312156119a557600080fd5b815167ffffffffffffffff808211156119bd57600080fd5b818401915084601f8301126119d157600080fd5b8151818111156119e3576119e3611c2c565b604051601f8201601f19908116603f01168101908382118183101715611a0b57611a0b611c2c565b81604052828152876020848701011115611a2457600080fd5b611a35836020830160208801611be6565b979650505050505050565b600060208284031215611a5257600080fd5b813567ffffffffffffffff811115611a6957600080fd5b82016101a0818503121561196f57600080fd5b600060208284031215611a8e57600080fd5b813567ffffffffffffffff811115611aa557600080fd5b8201610120818503121561196f57600080fd5b600060208284031215611aca57600080fd5b5051919050565b8183823760009101908152919050565b60008251611af3818460208701611be6565b9190910192915050565b6020815260008251806020840152611b1c816040850160208701611be6565b601f01601f19169190910160400192915050565b6000808335601e19843603018112611b4757600080fd5b83018035915067ffffffffffffffff821115611b6257600080fd5b6020019150600581901b36038213156117e757600080fd5b6000808335601e19843603018112611b9157600080fd5b83018035915067ffffffffffffffff821115611bac57600080fd5b6020019150368190038213156117e757600080fd5b600082821015611be157634e487b7160e01b600052601160045260246000fd5b500390565b60005b83811015611c01578181015183820152602001611be9565b83811115611c10576000848401525b50505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b8015158114611c5057600080fd5b5056fe4d657461526f7574657256323a2072657665727453796e74686573697a65526571756573742063616c6c206661696c65644d657461526f7574657256323a20696e7465726e616c2073776170206661696c65644d657461526f757465723a206f7468657220736964652063616c6c206661696c6564a2646970667358221220a2dff3f0a8dbc197d1ad55f50e2b6d0821fbeb5977ccbd177433edefb43232f964736f6c6343000807003360a060405234801561001057600080fd5b506040516104d73803806104d783398101604081905261002f91610044565b60601b6001600160601b031916608052610074565b60006020828403121561005657600080fd5b81516001600160a01b038116811461006d57600080fd5b9392505050565b60805160601c61043961009e6000396000818160550152818160a2015261017101526104396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80639fc314c81461003b578063dbec15bb14610050575b600080fd5b61004e610049366004610363565b6100a0565b005b6100777f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16331461016a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f53796d623a2063616c6c6572206973206e6f7420746865206d657461726f757460448201527f657200000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61019683837f00000000000000000000000000000000000000000000000000000000000000008461019b565b505050565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd00000000000000000000000000000000000000000000000000000000179052915160009283929088169161023a91906103c8565b6000604051808303816000865af19150503d8060008114610277576040519150601f19603f3d011682016040523d82523d6000602084013e61027c565b606091505b50915091508180156102a65750805115806102a65750808060200190518101906102a6919061039f565b610332576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f5472616e7366657248656c7065723a3a7472616e7366657246726f6d3a20747260448201527f616e7366657246726f6d206661696c65640000000000000000000000000000006064820152608401610161565b505050505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461035e57600080fd5b919050565b60008060006060848603121561037857600080fd5b6103818461033a565b925061038f6020850161033a565b9150604084013590509250925092565b6000602082840312156103b157600080fd5b815180151581146103c157600080fd5b9392505050565b6000825160005b818110156103e957602081860181015185830152016103cf565b818111156103f8576000828501525b50919091019291505056fea26469706673582212202568575dd38d51c811ca9abb487d12cf7f92601b834f2b8dba043bc452c3f35164736f6c63430008070033";

type MetaRouterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MetaRouterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MetaRouter__factory extends ContractFactory {
  constructor(...args: MetaRouterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MetaRouter";
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MetaRouter> {
    return super.deploy(overrides || {}) as Promise<MetaRouter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MetaRouter {
    return super.attach(address) as MetaRouter;
  }
  override connect(signer: Signer): MetaRouter__factory {
    return super.connect(signer) as MetaRouter__factory;
  }
  static readonly contractName: "MetaRouter";
  public readonly contractName: "MetaRouter";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MetaRouterInterface {
    return new utils.Interface(_abi) as MetaRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MetaRouter {
    return new Contract(address, _abi, signerOrProvider) as MetaRouter;
  }
}

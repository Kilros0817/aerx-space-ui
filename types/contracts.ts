import { Contract } from "near-api-js";

//TODO: Go through each and every 'any' type and verify it's right
export type TokenContract = Contract & {
    ft_balance_of: (accountId: string) => Promise<string>;
    get_owner: () => Promise<string>;
    ft_total_supply: () => Promise<string>;
    ft_metadata: () => Promise<any>;
    claim_gift: (accountId: string) => Promise<boolean>;
    reward_users_for_anniversaries: () => Promise<any>;
    change_owner_to: (new_owner_id: string) => Promise<void>;
    ft_transfer: (
        receiver_id: string,
        amount: string,
        memo: any,
    ) => Promise<void>;
    ft_transfer_call: (arg: {
        sender_id: string;
        receiver_id: string;
        amount: string;
        memo: any;
        msg: string;
    }) => Promise<string>;
    send_aex: (arg: {
        sender_id: string;
        receiver_id: string;
        amount: string;
        memo: any;
    }) => Promise<boolean>;
};

export type OtherTokenContract = Contract & {
    ft_balance_of: (accountId: string) => Promise<string>;
    ft_transfer_call: (arg: {
        receiver_id: string;
        amount: string;
        memo: any;
        msg: string;
    }) => Promise<string>;
};


export type PNFTContract = Contract & {
    nft_tokens_for_owner: (account_id: any) => Promise<any>;
    is_username_available: (username: string) => Promise<boolean>;
    has_registered: (user_id: string) => Promise<boolean>;
    profile_by_id: (arg: {
        user_id: string;
        user_to_find_id: any;
    }) => Promise<any>;
    post_details: (arg: { user_id: string; post_id: string }) => Promise<any>;
    get_all_posts: (user_id: string) => Promise<[any]>;
    get_users_ids: (user_id: string) => Promise<[string]>;
    repost_details: (arg: {
        user_id: string;
        repost_id: number;
    }) => Promise<any>;
    get_all_repost: (user_id: string) => Promise<[any]>;
    mint_profile: (
        arg: {
            user_id: string;
            username: string;
            token_metadata: any;
        },
        gas: string,
        deposit: string,
    ) => Promise<any>;
    edit_profile: (
        arg: {
            user_id: string;
            new_username: string;
            new_details: any;
        },
        gas: string,
    ) => Promise<any>;
    mint_post: (
        args: {
            user_id: string;
            origin_post_id: number;
            token_metadata: any;
        },
        gas: string,
    ) => Promise<any>;
    comment: (
        arg: {
            commenter_id: string;
            post_id: number;
            comment: string;
        },
        gas: string,
    ) => Promise<void>;
    charge: (
        arg: {
            charger_id: string;
            post_id: number;
            amount: string;
        },
        gas: string,
    ) => Promise<void>;
    charge_repost: (
        arg: {
            charger_id: string;
            repost_id: number;
            amount: string;
        },
        gas: string,
    ) => Promise<void>;
    nft_transfer: (
        args: {
            receiver_id: string;
            token_id: number;
        },
        gas: string,
        deposit: string,
    ) => Promise<void>;
};

export type ProfileContract = Contract & {
    mint_post: (
        args: {
            user_id: string;
            origin_post_id: number;
            token_metadata: any;
        },
        gas: string,
        deposit: string,
    ) => Promise<any>;
    repost: (arg: { post_id: number }, gas: string, deposit: string,) => Promise<any>;
    swap: (
        arg: { amount: string; min_expected: string },
        gas: string,
        depositAmount: any,
    ) => Promise<void>;
    list_post_for_sale: (
        arg: {
            post_id: number;
            price: string;
        },
        gas: string,
    ) => Promise<boolean>;
    transfer_ownership: (
        arg: {
            current_owner: string;
            new_owner: string;
            post_id: number;
        },
        gas: string,
    ) => Promise<boolean>;
    buy_post: (
        arg: { post_id: number },
        gas: string,
        deposit: string,
    ) => Promise<boolean>;
    is_username_available: (username: string) => Promise<boolean>;
    has_registered: (user_id: string) => Promise<boolean>;
    profile_by_id: (arg: {
        user_id: string;
        user_to_find_id: any;
    }) => Promise<any>;
    post_details: (arg: { user_id: string; post_id: string }) => Promise<any>;
    get_all_posts: (user_id: string) => Promise<[any]>;
    get_users_ids: (user_id: string) => Promise<[string]>;
    repost_details: (arg: {
        user_id: string;
        repost_id: number;
    }) => Promise<any>;
    get_all_repost: (user_id: string) => Promise<[any]>;
};

export type DexContract = Contract & {
    all_pools: () => Promise<[any]>;
    get_user_share: (arg: {
        account_id: string;
        pool_id: number;
    }) => Promise<number>;
    get_pool: (arg: { pool_id: number }) => Promise<any>;
    get_price_from_pool: (arg: {
        pool_id: number; token_id: string;
    }) => Promise<number>;
    get_return_amount_in_u128: (arg: {
        pool_id: number,
        amount_to_swap: string,
        token_from: string,
        token_to: string,
    }) => Promise<number>;
    register_or_get_balance: (arg: {}, gas: string, deposit: string) => Promise<any>;
    create_pool: (
        arg: {
            first_token_contract_id: string;
            sencond_token_contract_id: string;
            total_fee_percentage: number;
        },
        gas: string,
        deposit: string,
    ) => Promise<any>;
    lend: (
        arg: {
            pool_id: number;
            token_id: string;
            amount: any;
            min_expected: any;
            equivalent_aex: string;
        },
        gas: string,
        deposit: string,
    ) => Promise<any>;
    swap_aex: (
        arg: {
            pool_id: number;
            token_to: string;
            amount: string;
            min_expected: any;
        },
        gas: string,
        deposit: string,
    ) => Promise<any>;
};

export type NearAccount = {
    sendMoney: (arg: {
        receiverId: string;
        amount: number;
    }) => Promise<any>;
};

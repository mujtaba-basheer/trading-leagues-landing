import styled from 'styled-components';
import { Dispatch, SetStateAction, useContext } from 'react';

import { PopupProps } from '../../types';
import device from '../../styles/breakpoints';

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Modal = styled.dialog`
    top: 0;
    left: 0;
    z-index: 99;
    display: grid;
    place-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    width: 100%;
    height: 100%;
    outline: none;
    border: none;

    @media ${device.mobile} {
        display: block;
    }
`;

const PopupContent = styled.div`
    position: relative;
    background-color: #FFFFFF;
    border-radius: 30px;
    padding: 2.5em 2em;
    text-align: center;
    left: 0;

    @media ${device.mobile} {
        border-radius: 30px 30px 0 0;
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
    }

    & img {
        display: inline-block;
        width: 100px;
        height: auto;
        margin-bottom: 1em;
    }

    & > h2 {
        font-size: 3rem;
        font-weight: 600;
        color: #00df8d;
        margin-bottom: 0.25em;
    }

    & > h3 {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 1em;
    }

    & > p {
        font-size: 1.25rem;
        font-weight: 400;

        & span {
            font-weight: 600;
            color: #00df8d;
        }
    }
`;

const CloseButton = styled.button`
    background: none;
    position: absolute;
    border: none;
    top: 0;
    right: 0;
    padding: 1em;
    cursor: pointer;

    & img {
        display: block;
        width: 30px;
        height: 30px;
    }
`;

const PopupInfo = styled.div`
    background-color: #15182C;
    border-radius: 20px;
    padding: 1.5em 1em;
    margin: 1em 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    row-gap: 1em;
    justify-items: space-between;

    & h3 {
        font-size: 1rem;
        font-weight: 600;
        color: #FFFFFF;
    }

    & h2 {
        font-size: 2rem;
        font-weight: 600;
        color: #00df8d;
    }
`;

const Popup = ({ formContext, setFormContext }: { setFormContext: Dispatch<SetStateAction<PopupProps>>; formContext: PopupProps; }) => {
    const transform = (mobile: string) => mobile.substring(6);
    const onClose = () => {
        setFormContext({
            mobile: "",
            wailist_no: 0,
            open_modal: false,
            status: ["", "", ""],
            loading: [false, false, false]
        });
    };

    return <Modal open={formContext.open_modal}>
        <PopupContent>
            <CloseButton onClick={onClose}>
                <img src={`${asset_prefix}/assets/close-circle.svg`} />
            </CloseButton>
            <img src={`${asset_prefix}/assets/confetti.gif`} alt="confetti" />
            <h2>Yay!</h2>
            <h3>You have been added to the waitlist</h3>
            <p>A referral link has been successfully sent to <span>XXXXXX{transform(formContext.mobile)}</span></p>
            <PopupInfo>
                <h3>Player</h3>
                <h3>Waitlist</h3>
                <h2>You</h2>
                <h2>#{formContext.wailist_no}</h2>
            </PopupInfo>
            <p>You can begin your trading game soon. We will keep you updated.</p>
        </PopupContent>
    </Modal>;
};

export default Popup;
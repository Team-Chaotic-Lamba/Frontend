import styled from 'styled-components'

export const PageDiv = styled.div`
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: space-evenly;
`;

export const LoginDiv = styled.div`
    border: 1px solid #363636;
    border-radius: 4px;
    width: 500px;
    height: 475px;
    padding: 25px 25px;

    form {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        .button {
            margin: 20px;
        }
    }
`;

export const OnboardingDiv = styled.div`
    .tabs {
        display: flex;
        justify-content: space-evenly;

        ul {
            width: 100%;
            border: none;

            .is-active {
                border: 1px solid #363636;
            }

            li {
                border-radius: 4px;
                width: 100%;
                text-align: center;

                &:hover {
                    border: 1px solid black;
                }

                .button {
                    width: 100%;
                    border: 1px solid transparent;

                    &:focus {
                        box-shadow: none;
                    }

                    &:hover {
                        background-color: #cccccc;
                    }
                }          
            }
        }
    }
`;
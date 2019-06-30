import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import BN from 'bignumber.js';
import AssetDetailsManagerInfo from 'components/AssetDetailsManagerInfo';
import AssetDetailsInfo from 'components/AssetDetailsInfo';
import AssetFunding from 'components/AssetFunding';
import AssetFundingModule from 'components/AssetFundingModule';
import AssetDetailsRightCol from './assetDetailsRightCol';
import AssetDetailsLeftCol from './assetDetailsLeftCol';
import AssetDetailsWrapper from './assetDetailsWrapper';

const AssetDetails = ({
  asset,
  handleAssetFavorited,
  fundAsset,
  updateNotification,
  loadingUserInfo,
  gasPrice,
  assetManager,
  blockchainContext,
}) => {
  const {
    city,
    country,
    assetId,
    assetManager: assetManagerAddress,
    numberOfInvestors,
    watchListed,
    files,
    managerPercentage,
    collateralPercentage,
    funded,
    pastDate,
    percentageOwnedByUser,
    defaultData,
    fundingGoal,
    fundingProgress,
    userInvestment,
    about,
    financials,
    risks,
  } = asset;

  const {
    imageSrc,
    name,
    details,
    description,
  } = defaultData;

  return (
    <AssetDetailsWrapper>
      <AssetDetailsLeftCol xs={24} sm={24} md={24} lg={12} xl={12}>
        <AssetDetailsInfo
          name={name}
          imageSrc={imageSrc}
          city={city}
          country={country}
          details={details}
          description={description}
          assetId={assetId}
          watchListed={watchListed}
          handleAssetFavorited={handleAssetFavorited}
          about={about}
          financials={financials}
          risks={risks}
          files={files}
        />
      </AssetDetailsLeftCol>
      <AssetDetailsRightCol xs={24} sm={24} md={24} lg={12} xl={12}>
      <AssetFundingModule
        asset={asset}
        blockchainContext={blockchainContext}
        gasPrice={gasPrice}
      >
        {props => <AssetFunding {...props}/>}
      </AssetFundingModule>
        <AssetDetailsManagerInfo
          assetManager={assetManager}
          address={assetManagerAddress}
          managerPercentage={managerPercentage}
          collateralPercentage={collateralPercentage}
          style={{
            marginTop: '20px',
          }}
        />
      </AssetDetailsRightCol>
    </AssetDetailsWrapper>
  )
}
export default AssetDetails;

import React from 'react'
import styled from '@emotion/styled'
import Skeleton from 'react-loading-skeleton'
import { Box } from './styles'

const ShrinkedSkeleton = styled(Skeleton)<{ width?: string }>`
  width: ${(props) => props.width};
`

const LoadingCard: React.FC = () => (
  <Box className="info-box">
    <div className="info-box-icon">
      <Skeleton circle height={50} width={50} />
    </div>
    <div className="info-box-content">
      <div className="row">
        <div className="col-10">
          <ShrinkedSkeleton width="150px" />
        </div>
        <div className="col-2">
          <div className="float-right dropdown">
            <span className="text-gray">
              <i className="fas fa-cog"></i>
            </span>
          </div>
        </div>
      </div>
      <div>
        <div>
          <ShrinkedSkeleton width="200px" />
        </div>
        <div>
          <ShrinkedSkeleton width="240px" />
        </div>
      </div>
    </div>
  </Box>
)

export default LoadingCard

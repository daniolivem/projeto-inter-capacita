import styled from 'styled-components';

export const Container = styled.div`
  /* Add your styles for the Product View Page container here */
  padding: 20px;

  .breadcrumb {
    /* Styles for breadcrumb */
    margin-bottom: 20px;
    span {
      margin-right: 5px;
      &:not(:last-child)::after {
        content: '/';
        margin-left: 5px;
      }
    }
  }

  .product-details-section {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;

    .image-gallery {
      flex: 1;
      min-width: 300px;
      .main-image {
        width: 700.731px;
        height: 571px;
        flex-shrink: 0;
        margin-bottom: 10px;
      }
      .thumbnails {
        display: flex;
        gap: 10px;
        overflow-x: auto;
        .thumbnail {
          width: 117.811px;
          height: 96px;
          flex-shrink: 0;
          border-radius: 4px;
          object-fit: cover;
          cursor: pointer;
          border: 2px solid transparent;

          /* Specific background colors for thumbnails */
          &:nth-child(1) {
            background: #E2E3FF;
          }
          &:nth-child(2) {
            background: #FFE8BC;
          }
          &:nth-child(3) {
            background: #FFC0BC;
          }
          &:nth-child(4) {
            background: #DEC699;
          }
          &:nth-child(5) {
            background: #E8DFCF;
          }

          &.active {
            border-color: #007bff; /* Example active border color */
          }
        }
      }
    }

    .product-info {
      flex: 1;
      min-width: 300px;

      h2 {
        margin-top: 0;
      }

      .rating {
        margin-bottom: 15px;
        /* Styles for rating */
      }

      .price-info {
        margin-bottom: 20px;
        .original-price {
          text-decoration: line-through;
          margin-right: 10px;
          color: #888;
        }
        .current-price {
          font-size: 1.5em;
          font-weight: bold;
        }
      }

      .description {
        margin-bottom: 20px;
        line-height: 1.5;
      }

      .options {
        margin-bottom: 20px;

        .size-options, .color-options {
          margin-bottom: 15px;
          h4 {
            margin-bottom: 10px;
          }
          .buttons {
            display: flex;
            gap: 10px;
            .option-button {
              padding: 10px 15px;
              border: 1px solid #ccc;
              background-color: #fff;
              cursor: pointer;
              &.selected {
                background-color: #000;
                color: #fff;
                border-color: #000;
              }
            }
          }
          .color-swatches {
            display: flex;
            gap: 10px;
            .color-swatch {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              border: 1px solid #ccc;
              cursor: pointer;
              &.selected {
                border-color: #000; /* Example selected border */
                box-shadow: 0 0 5px rgba(0,0,0,0.3);
              }
            }
          }
        }
      }

      .buy-button {
        padding: 15px 30px;
        width: 220px;
        height: 48px;
        flex-shrink: 0;
        background-color: #FFB31F; /* Updated background color */
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1.2em;
        font-weight: bold;
        border-radius: 5px;
        &:hover {
          opacity: 0.9;
        }
      }
    }
  }

  .related-products-section {
    margin-top: 40px;
    h3 {
      margin-bottom: 20px;
    }
    .related-products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
    }
  }

  /* Add responsive adjustments as needed */
  @media (max-width: 768px) {
    .product-details-section {
      flex-direction: column;
    }
  }
`;
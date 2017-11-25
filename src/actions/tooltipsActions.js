export const SHOW_TOOLTIP = 'SHOW_TOOLTIP';
export const HIDE_TOOLTIP =  'HIDE_TOOLTIP';

export function showTooltip(params) {
  return {
    type: SHOW_TOOLTIP,
    show: true,
    message: params.message,
    top: params.top,
    left: params.left,
    width: params.width
  }
}

export function hideTooltip() {
  return {
    type: HIDE_TOOLTIP,
    show: false,
    message: '',
    top: 0,
    left: 0,
    width: 0
  }
}

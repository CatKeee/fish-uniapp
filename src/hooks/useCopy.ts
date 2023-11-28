export function useCopy() {
    const copy = (text: string) => {
        return new Promise((resolve, reject) => {
            uni.setClipboardData({
                data: String(text),
                success: function () {
                    uni.$u.toast('复制成功');
                    resolve(true);
                },
                fail: function () {
                    uni.$u.toast('复制失败');
                    reject(false);
                }
            });
        })
    }
    return {
        copy
    }
}
